// ==================== UPDATE POPUP ====================
function updatePopup() {
  if (typeof translations === 'undefined') {
    console.error("translations is not loaded yet");
    return;
  }

  const option = document.getElementById('optionSelect').value;
  const lang = document.getElementById('languageSelect').value;

  const optionData = translations.options[option][lang];
  const buttonData = translations.buttons[lang];

  document.getElementById('popupTitle').innerText = optionData.title;
  document.getElementById('popupSubtitle').innerText = optionData.subtitle;
  document.getElementById('downloadBtn').innerHTML = buttonData.downloadBtn;
  document.getElementById('copyBtn').innerHTML = buttonData.copyBtn;
  document.getElementById('shareLabel').innerText = buttonData.shareLabel;

  document.getElementById('overlay').style.display = 'flex';
}

// ==================== INITIALIZE IMAGES ====================
function initImages() {
  const eventPhoto = document.getElementById('eventPhoto');
  eventPhoto.src = images.eventPhoto;

  document.body.style.backgroundImage = `url('${images.background}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center top';
  document.body.style.backgroundRepeat = 'no-repeat';
}

// ==================== PAGE LOAD ====================
window.onload = function() {
  initImages();

  document.getElementById('optionSelect').value = '1';
  document.getElementById('languageSelect').value = 'en';

  setTimeout(function() {
    updatePopup();
  }, 800);
};

// ==================== SHARING CONFIG ====================
const shareUrl = "https://www.hktdc.com/event/foodexpopro/en/form/organic-form?visitor_type=01&country=&ref_office=&ref_code=&reg_link_id=808737bfa109a15a01c79c0936a40eb74e22124a7712073a537970bbc0c49332";
const shareMessage = `Check out this HKTDC Food Expo Pro 2026: ${shareUrl}`;

// ==================== SHARING FUNCTIONS ====================
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

function shareToLinkedIn() {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  window.open(url, '_blank');
}

function shareToFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  window.open(url, '_blank');
}

function shareToWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToEmail() {
  window.location.href = `mailto:?subject=HKTDC Social Sharing Demo&body=${encodeURIComponent(shareMessage)}`;
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
