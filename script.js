// ==================== INITIALIZE IMAGES FROM CONFIG ====================
function initImages() {
  // Set Event Photo
  const eventPhoto = document.getElementById('eventPhoto');
  eventPhoto.src = images.eventPhoto;

  // Set Background Image dynamically from images.js
  document.body.style.backgroundImage = `url('${images.background}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
}

// ==================== UPDATE POPUP (Option + Language) ====================
function updatePopup() {
  const option = document.getElementById('optionSelect').value;
  const lang = document.getElementById('languageSelect').value;

  const optionData = translations.options[option][lang];
  const buttonData = translations.buttons[lang];

  // Update texts
  document.getElementById('popupTitle').innerText = optionData.title;
  document.getElementById('popupSubtitle').innerText = optionData.subtitle;
  document.getElementById('downloadBtn').innerHTML = buttonData.downloadBtn;
  document.getElementById('copyBtn').innerHTML = buttonData.copyBtn;
  document.getElementById('shareLabel').innerText = buttonData.shareLabel;

  // Show pop-up when changing option or language
  document.getElementById('overlay').style.display = 'flex';
}

// ==================== INITIALIZE ON PAGE LOAD ====================
window.onload = function() {
  // Initialize images (event photo + background)
  initImages();

  // Set default dropdown values
  document.getElementById('optionSelect').value = '1';
  document.getElementById('languageSelect').value = 'en';

  // Auto show pop-up after page loads
  setTimeout(function() {
    updatePopup();
  }, 800);
};

// ==================== CONFIG & SHARING ====================
const shareUrl = "https://www-uat.hktdc.com/event/foodexpopro/en/form/organic-form?ref_code=YOURCODE";
const shareMessage = `I'm attending Food Expo Pro 2026! Check it out: ${shareUrl}`;

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

function shareToLinkedIn() {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
}

function shareToFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
}

function shareToWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToEmail() {
  window.location.href = `mailto:?subject=Join me at Food Expo Pro 2026&body=${encodeURIComponent(shareMessage)}`;
}

function copyToClipboard() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied!"));
}

function shareToX() {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToThreads() {
  window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToWeChat() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste in WeChat."));
}

function shareToInstagram() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste in Instagram."));
}

function shareToRedNote() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste in RedNote."));
}

function downloadImage() {
  alert("Download Image feature triggered.");
}

function copyShareableLink() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Shareable link copied!"));
}

function generateQRCode() {
  const modal = document.getElementById('qrModal');
  const qrImage = document.getElementById('qrImage');
  qrImage.src = `https://quickchart.io/qr?text=${encodeURIComponent(shareUrl)}&size=200`;
  modal.style.display = 'flex';
}

function closeQRModal() {
  document.getElementById('qrModal').style.display = 'none';
}

function downloadQRCode() {
  const qrImage = document.getElementById('qrImage');
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = qrImage.src;
  link.click();
}
