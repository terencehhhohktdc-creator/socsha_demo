# HKTDC Social Sharing Pop-up Demo

Demo for the **VEP Buyers Registration – Social Media Sharing and Referral Tracking** feature.

## Features

- Post-registration social sharing pop-up
- 3 copywriting options × 3 languages (EN / TC / SC)
- Action buttons: **Download Image** + **Copy Shareable Link**
- 1-click share to:
  - LinkedIn (URL only)
  - Facebook (URL only)
  - X (Message + URL)
  - Threads (Message + URL)
  - WhatsApp (Message + URL)
  - Email (Message + URL)
  - QR Code
- Referral parameters (`rel` + `cha`) automatically appended
- Mobile responsive + tighter layout

## How to use

1. Open `index.html` in a browser (or host on GitHub Pages)
2. Use the top dropdowns to switch **Option** and **Language**
3. Pop-up appears automatically

## Folder Structure

```
socsha_demo/
├── index.html
├── style.css
├── script.js
├── js/
│   └── translations.js
├── img/
│   └── event-photo.svg   ← placeholder (replace with real JPG/PNG)
└── README.md
```

## Notes

- Replace `./img/event-photo.svg` with a real square event image (JPG or PNG recommended).
- `demoConfig.baseShareUrl` and `referrerId` in `translations.js` are for demo purposes.
- In production these values come from VEP CMS / backend.
- Facebook share may have issues on iOS Safari (known limitation of sharer.php).

## Reference

Confluence: VEP Buyers Registration - Social Media Sharing and Referral Tracking
