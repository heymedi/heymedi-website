const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: '.env.local' });

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images', 'notion');
const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'testimonials.json');

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Default testimonials to use if Notion is empty
const defaultTestimonials = [
  {
    id: 1,
    quote: '타 대행사에서 돈만 쓰고 효과를 못 봐서 반포기 상태였거든요. 근데 헤이메디는 다르네요. 처음엔 한 달만 테스트해보자 했는데, <strong className="text-white font-bold">벌써 3개월이 지났습니다!!</strong>',
    author: "김원장님",
    clinic: "**치과의원",
    image: "/images/review/review01.png"
  },
  {
    id: 2,
    quote: '대표님이 3개월 동안 옆에서 멱살 잡고 케어해주신 덕분에 <strong className="text-white font-bold">상담 문의랑 내원율이 확실히 올라왔어요.</strong>',
    author: "이원장님",
    clinic: "**피부과의원",
    image: "/images/review/review02.png"
  },
  {
    id: 3,
    quote: '블로그가 효과가 있을까 의심을 많이 했었는데, 요즘은 <strong className="text-white font-bold">환자들이 블로그 보고 왔다는 이야기</strong>를 많이 하시네요.',
    author: "박원장님",
    clinic: "**한의원",
    image: "/images/review/review03.png"
  },
  {
    id: 4,
    quote: '<strong className="text-white font-bold">가격 부담은 덜하면서 성과는 확실하니</strong> 추가 연장을 안 할 이유가 없네요. 진짜 돈 아깝지 않은 곳입니다.^^',
    author: "최실장님",
    clinic: "**정형외과의원",
    image: "/images/review/review04.png"
  },
  {
    id: 5,
    quote: '바빠서 답변도 잘 못해드렸는데 <strong className="text-white font-bold">글을 섬세하고 가독성 좋게 작성해주셔서 감동받았습니다.</strong> 앞으로도 계속 이용해보겠습니다!',
    author: "정원장님",
    clinic: "**성형외과의원",
    image: "/images/review/review05.png"
  },
  {
    id: 6,
    quote: '체험단 모집으로 이용해보았습니다. <strong className="text-white font-bold">가이드가 잘되어있어 블로거분들 모집에 수월했습니다.</strong>',
    author: "윤실장님",
    clinic: "**피부과의원",
    image: "/images/review/review06.png"
  },
  {
    id: 7,
    quote: '원장들 모임에서 마케팅 어디 맡기냐고 자꾸 물어보는데, <strong className="text-white font-bold">우리 지역 TO 뺏길까 봐 일부러 안 알려주고 있습니다. ㅎㅎ</strong>',
    author: "조원장님",
    clinic: "**안과의원",
    image: "/images/review/review07.png"
  }
];

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function getRichText(property) {
  if (!property || !property.rich_text) return "";
  return property.rich_text.map(rt => rt.text.content).join("");
}

function getTitle(property) {
  if (!property || !property.title) return "";
  return property.title.map(t => t.text.content).join("");
}

async function fetchNotionDB() {
  if (!TOKEN || !DB_ID) {
    console.log("Notion credentials not found. Using default testimonials.");
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultTestimonials, null, 2));
    return;
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DB_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        filter: {
          property: "게시여부",
          checkbox: {
            equals: true
          }
        },
        sorts: [
          {
            property: "생성 일시",
            direction: "ascending"
          }
        ]
      })
    });

    if (!response.ok) {
      console.error("Failed to fetch Notion DB", await response.text());
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultTestimonials, null, 2));
      return;
    }

    const data = await response.json();
    const rows = data.results;

    if (rows.length === 0) {
      console.log("No published rows in Notion DB. Using default testimonials.");
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultTestimonials, null, 2));
      return;
    }

    const testimonials = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const props = row.properties;

      const author = getTitle(props["이름(원장님/실장님)"]);
      const clinic = getRichText(props["병원명"]);
      const quote = getRichText(props["리뷰내용"]).replace(/\\n/g, "<br/>"); // Basic line break support
      
      let imagePath = "";
      if (props["이미지"] && props["이미지"].files && props["이미지"].files.length > 0) {
        const fileUrl = props["이미지"].files[0].file?.url || props["이미지"].files[0].external?.url;
        if (fileUrl) {
          const extension = fileUrl.split('?')[0].split('.').pop() || 'png';
          const filename = `notion-review-${row.id}.${extension}`;
          const filepath = path.join(OUTPUT_DIR, filename);
          
          console.log(`Downloading image for review: ${author}...`);
          try {
            await downloadImage(fileUrl, filepath);
            imagePath = `/images/notion/${filename}`;
          } catch(e) {
            console.error(`Error downloading image for ${author}:`, e);
          }
        }
      }

      testimonials.push({
        id: row.id,
        quote: quote,
        author: author,
        clinic: clinic,
        image: imagePath || "/images/review/review01.png" // Fallback image
      });
    }

    console.log(`Successfully synced ${testimonials.length} reviews from Notion!`);
    fs.writeFileSync(DATA_FILE, JSON.stringify(testimonials, null, 2));

  } catch (error) {
    console.error("Notion sync script failed:", error);
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultTestimonials, null, 2));
  }
}

fetchNotionDB();
