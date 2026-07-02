const https = require('https');
require('dotenv').config({ path: '.env.local' });

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DATABASE_ID;

const testimonials = [
  {
    quote: '타 대행사에서 돈만 쓰고 효과를 못 봐서 반포기 상태였거든요. 근데 헤이메디는 다르네요. 처음엔 한 달만 테스트해보자 했는데, <strong className="text-white font-bold">벌써 3개월이 지났습니다!!</strong>',
    author: "김원장님",
    clinic: "**치과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review01.png"
  },
  {
    quote: '대표님이 3개월 동안 옆에서 멱살 잡고 케어해주신 덕분에 <strong className="text-white font-bold">상담 문의랑 내원율이 확실히 올라왔어요.</strong>',
    author: "이원장님",
    clinic: "**피부과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review02.png"
  },
  {
    quote: '블로그가 효과가 있을까 의심을 많이 했었는데, 요즘은 <strong className="text-white font-bold">환자들이 블로그 보고 왔다는 이야기</strong>를 많이 하시네요.',
    author: "박원장님",
    clinic: "**한의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review03.png"
  },
  {
    quote: '<strong className="text-white font-bold">가격 부담은 덜하면서 성과는 확실하니</strong> 추가 연장을 안 할 이유가 없네요. 진짜 돈 아깝지 않은 곳입니다.^^',
    author: "최실장님",
    clinic: "**정형외과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review04.png"
  },
  {
    quote: '바빠서 답변도 잘 못해드렸는데 <strong className="text-white font-bold">글을 섬세하고 가독성 좋게 작성해주셔서 감동받았습니다.</strong> 앞으로도 계속 이용해보겠습니다!',
    author: "정원장님",
    clinic: "**성형외과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review05.png"
  },
  {
    quote: '체험단 모집으로 이용해보았습니다. <strong className="text-white font-bold">가이드가 잘되어있어 블로거분들 모집에 수월했습니다.</strong>',
    author: "윤실장님",
    clinic: "**피부과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review06.png"
  },
  {
    quote: '원장들 모임에서 마케팅 어디 맡기냐고 자꾸 물어보는데, <strong className="text-white font-bold">우리 지역 TO 뺏길까 봐 일부러 안 알려주고 있습니다. ㅎㅎ</strong>',
    author: "조원장님",
    clinic: "**안과의원",
    image: "https://raw.githubusercontent.com/heymedi/heymedi-website/main/public/images/review/review07.png"
  }
];

async function createNotionPage(item) {
  const data = {
    parent: { database_id: DB_ID },
    properties: {
      "이름(원장님/실장님)": {
        title: [
          {
            text: {
              content: item.author
            }
          }
        ]
      },
      "병원명": {
        rich_text: [
          {
            text: {
              content: item.clinic
            }
          }
        ]
      },
      "리뷰내용": {
        rich_text: [
          {
            text: {
              content: item.quote
            }
          }
        ]
      },
      "게시여부": {
        checkbox: true
      },
      "이미지": {
        files: [
          {
            type: "external",
            name: "review-image.png",
            external: {
              url: item.image
            }
          }
        ]
      }
    }
  };

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.error("Failed to create page for", item.author, await response.text());
  } else {
    console.log("Successfully created page for", item.author);
  }
}

async function seed() {
  console.log("Starting to seed Notion DB...");
  for (const item of testimonials) {
    await createNotionPage(item);
  }
  console.log("Finished seeding!");
}

seed();
