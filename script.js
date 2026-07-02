// ==================== LANGUAGE SWITCHING ====================
function changeLanguage() {
  const lang = document.getElementById('languageSelect').value;
  const t = translations[lang];

  // Update popup texts
  document.getElementById('popupTitle').innerText = t.title;
  document.getElementById('popupSubtitle').innerText = t.subtitle;
  document.getElementById('downloadBtn').innerHTML = t.downloadBtn;
  document.getElementById('copyBtn').innerHTML = t.copyBtn;
  document.getElementById('shareLabel').innerText = t.shareLabel;
}

// Set default language to English on load
window.onload = function() {
  // Auto show popup
  setTimeout(function() {
    document.getElementById('overlay').style.display = 'flex';
  }, 800);

  // Set default language
  document.getElementById('languageSelect').value = 'en';
};

// ==================== AUTO SHOW POPUP ====================
window.onload = function() {
  setTimeout(function() {
    document.getElementById('overlay').style.display = 'flex';
  }, 800); // Show popup after 0.8 seconds
};

// ==================== CONFIGURATION ====================
const shareUrl = "https://www-uat.hktdc.com/event/foodexpopro/en/form/organic-form?ref_code=YOURCODE";
const shareMessage = `I'm attending Food Expo Pro 2026! Check it out: ${shareUrl}`;

// ==================== POPUP CONTROL ====================
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

// ==================== SHARING FUNCTIONS ====================
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
  navigator.clipboard.writeText(shareMessage).then(() => {
    alert("Link copied to clipboard!");
  });
}

function shareToX() {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToThreads() {
  window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(shareMessage)}`, '_blank');
}

function shareToWeChat() {
  navigator.clipboard.writeText(shareMessage).then(() => {
    alert("Link copied! Please open WeChat and paste it.");
  });
}

function shareToInstagram() {
  navigator.clipboard.writeText(shareMessage).then(() => {
    alert("Link copied! Please open Instagram and paste it.");
  });
}

function shareToRedNote() {
  navigator.clipboard.writeText(shareMessage).then(() => {
    alert("Link copied! Please open RedNote (小红书) and paste it.");
  });
}

function downloadImage() {
  alert("Download Image feature triggered.");
}

function copyShareableLink() {
  navigator.clipboard.writeText(shareMessage).then(() => {
    alert("Shareable link copied!");
  });
}

// ==================== QR CODE ====================
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
  if (!qrImage.src) {
    alert("Please generate the QR code first.");
    return;
  }
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = qrImage.src;
  link.click();
}
