# HKTDC Social Sharing Pop-up Demo

Demo for the **VEP Buyers Registration – Social Media Sharing and Referral Tracking** feature.

## Features

- **Password protected** access
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
2. Enter the password when prompted  
   **Default password: `HKTDC2026`**
3. Use the top dropdowns to switch **Option** and **Language**
4. Pop-up appears automatically

> You can change the password in `script.js` (search for `DEMO_PASSWORD`).

## Folder Structure

```
socsha_demo/
├── index.html
├── style.css
├── script.js
├── js/
│   └── translations.js
├── img/
│   └── event-photo.jpg   ← placeholder (replace with real JPG/PNG)
└── README.md
```

## Notes

- Replace `./img/event-photo.jpg` with a real square event image (JPG or PNG recommended).
- `demoConfig.baseShareUrl` and `referrerId` in `translations.js` are for demo purposes.
- In production these values come from VEP CMS / backend.
- Facebook share may have issues on iOS Safari (known limitation of sharer.php).
- Password protection is client-side only (suitable for private demos, not production security).

## Reference

Confluence: VEP Buyers Registration - Social Media Sharing and Referral Tracking
