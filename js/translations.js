// ==================== TRANSLATIONS & COPY OPTIONS ====================
// Option 1 / 2 / 3 × EN / TC / SC

const translations = {
  1: {
    en: {
      title: "Share Your Attendance",
      subtitle: "Invite your industry peers to join.",
      shareLabel: "Or share directly:",
      downloadBtn: "↓ Download Image",
      copyBtn: "⎘ Copy Shareable Link",
      prefilledMessage: "I've registered for this HKTDC event. Join me!"
    },
    tc: {
      title: "分享您的參與",
      subtitle: "邀請業界同行一同參與。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下載圖片",
      copyBtn: "⎘ 複製分享連結",
      prefilledMessage: "我已報名參加這個貿發局活動，邀請你一同參與！"
    },
    sc: {
      title: "分享您的参与",
      subtitle: "邀请业界同行一同参与。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下载图片",
      copyBtn: "⎘ 复制分享链接",
      prefilledMessage: "我已报名参加这个贸发局活动，邀请你一同参与！"
    }
  },
  2: {
    en: {
      title: "Let Your Peers Know",
      subtitle: "Share this valuable opportunity with them.",
      shareLabel: "Or share directly:",
      downloadBtn: "↓ Download Image",
      copyBtn: "⎘ Copy Shareable Link",
      prefilledMessage: "Check out this HKTDC event – a great opportunity for our industry!"
    },
    tc: {
      title: "讓同行知道",
      subtitle: "與他們分享這個寶貴機會。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下載圖片",
      copyBtn: "⎘ 複製分享連結",
      prefilledMessage: "看看這個貿發局活動——對我們業界來說是一個很好的機會！"
    },
    sc: {
      title: "让同行知道",
      subtitle: "与他们分享这个宝贵机会。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下载图片",
      copyBtn: "⎘ 复制分享链接",
      prefilledMessage: "看看这个贸发局活动——对我们业界来说是一个很好的机会！"
    }
  },
  3: {
    en: {
      title: "You're Attending",
      subtitle: "Invite your industry peers to explore with you.",
      shareLabel: "Or share directly:",
      downloadBtn: "↓ Download Image",
      copyBtn: "⎘ Copy Shareable Link",
      prefilledMessage: "I'm attending this HKTDC event. Come explore with me!"
    },
    tc: {
      title: "您已參與",
      subtitle: "邀請業界同行與您一同探索。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下載圖片",
      copyBtn: "⎘ 複製分享連結",
      prefilledMessage: "我將參加這個貿發局活動，邀請你一同探索！"
    },
    sc: {
      title: "您已参与",
      subtitle: "邀请业界同行与您一同探索。",
      shareLabel: "或直接分享：",
      downloadBtn: "↓ 下载图片",
      copyBtn: "⎘ 复制分享链接",
      prefilledMessage: "我将参加这个贸发局活动，邀请你一同探索！"
    }
  }
};

// ==================== DEMO CONFIG ====================
// In real implementation these would come from CMS / backend

const demoConfig = {
  // Base form sharing URL (without referral parameters)
  baseShareUrl: "https://www-uat.hktdc.com/event/foodexpopro/en/form/organic-form?visitor_type=01&country=&ref_office=&ref_code=38B48B9A8&reg_link_id=95fe644387fc80fd61f753a4fc759b7fcb1f65064d60026bb0bcd0597594a629",

  // Simulated Referrer ID (Base62 of registration number) - 8-9 characters
  referrerId: "0LV3g9q8I",

  // Event photo path
  eventPhoto: "./img/event-photo.jpg"
};
