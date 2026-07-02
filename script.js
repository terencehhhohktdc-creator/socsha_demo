const shareUrl = "https://www-uat.hktdc.com/event/foodexpopro/en/form/organic-form?ref_code=YOURCODE";
const shareMessage = `I'm attending Food Expo Pro 2026! Check it out: ${shareUrl}`;

// Popup Control
function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.getElementById('openBtn').addEventListener('click', openPopup);

// Sharing Functions
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
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste it in WeChat."));
}

function shareToInstagram() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste it in Instagram."));
}

function shareToRedNote() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Link copied! Paste it in RedNote."));
}

function downloadImage() {
  alert("Download feature triggered.");
}

function copyShareableLink() {
  navigator.clipboard.writeText(shareMessage).then(() => alert("Shareable link copied!"));
}

// QR Code using QuickChart.io
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
