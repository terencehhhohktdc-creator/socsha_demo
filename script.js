// ==================== STATE ====================
let currentOption = "1";
let currentLang = "en";

// ==================== PASSWORD PROTECTION ====================
// Change this password as needed
const DEMO_PASSWORD = "HKTDC2026";

function checkPassword() {
  const input = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("passwordError");

  if (input.value === DEMO_PASSWORD) {
    // Correct password
    sessionStorage.setItem("demoAuth", "true");
    document.getElementById("passwordGate").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    initDemo();
  } else {
    // Wrong password
    errorMsg.style.display = "block";
    input.value = "";
    input.focus();
  }
}

// Allow pressing Enter key
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("passwordInput");
  if (input) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkPassword();
      }
    });
  }

  // Check if already authenticated in this session
  if (sessionStorage.getItem("demoAuth") === "true") {
    document.getElementById("passwordGate").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    initDemo();
  }
});

function initDemo() {
  updatePopup();
  // Auto show popup after short delay (simulating post-registration)
  setTimeout(() => {
    document.getElementById("overlay").style.display = "flex";
  }, 400);
}

// ==================== INIT ====================
window.onload = function () {
  // Password gate handles the rest
};

// ==================== UPDATE POPUP CONTENT ====================
function updatePopup() {
  currentOption = document.getElementById("optionSelect").value;
  currentLang = document.getElementById("languageSelect").value;

  const t = translations[currentOption][currentLang];

  document.getElementById("popupTitle").textContent = t.title;
  document.getElementById("popupSubtitle").textContent = t.subtitle;
  document.getElementById("shareLabel").textContent = t.shareLabel;
  document.getElementById("downloadBtn").textContent = t.downloadBtn;
  document.getElementById("copyBtn").textContent = t.copyBtn;

  // Keep popup visible when switching
  document.getElementById("overlay").style.display = "flex";
}

// ==================== CLOSE ====================
function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

// ==================== BUILD SHAREABLE LINK ====================
// Appends rel (referrer ID) + cha (channel code)
function getShareableLink(channel = "copy") {
  const base = demoConfig.baseShareUrl;
  const rel = demoConfig.referrerId;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}rel=${rel}&cha=${channel}`;
}

function getPrefilledMessage() {
  return translations[currentOption][currentLang].prefilledMessage;
}

// ==================== COPY SHAREABLE LINK ====================
function copyShareableLink() {
  const link = getShareableLink("copy");
  const message = getPrefilledMessage();
  const fullText = `${message}\n\n${link}`;

  navigator.clipboard.writeText(fullText).then(() => {
    alert("Copied to clipboard!\n\n" + fullText);
  }).catch(() => {
    // Fallback
    prompt("Copy this text:", fullText);
  });
}

// ==================== DOWNLOAD IMAGE ====================
function downloadImage() {
  const img = document.getElementById("eventPhoto");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "HKTDC-Event-Image.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==================== SOCIAL SHARE (1-CLICK) ====================
function shareTo(platform) {
  const shareUrl = getShareableLink(platform);
  const message = getPrefilledMessage();
  let url = "";

  switch (platform) {
    case "linkedin":
      // URL only (LinkedIn does not support prefilled text via share-offsite)
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      break;

    case "facebook":
      // URL only. Note: may have issues on iOS Safari
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      break;

    case "x":
      url = `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(message)}`;
      break;

    case "threads":
      // Official Threads Web Intent
      url = `https://www.threads.net/intent/post?text=${encodeURIComponent(message + " " + shareUrl)}`;
      break;

    case "whatsapp":
      url = `https://wa.me/?text=${encodeURIComponent(message + " " + shareUrl)}`;
      break;

    case "email":
      url = `mailto:?subject=${encodeURIComponent("Join me at this HKTDC event")}&body=${encodeURIComponent(message + "\n\n" + shareUrl)}`;
      break;
  }

  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

// ==================== QR CODE ====================
function generateQRCode() {
  const shareUrl = getShareableLink("qr");
  // Using QuickChart.io (simple & reliable)
  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(shareUrl)}&size=200`;

  document.getElementById("qrImage").src = qrUrl;
  document.getElementById("qrModal").style.display = "flex";
}

function closeQRModal() {
  document.getElementById("qrModal").style.display = "none";
}

function downloadQRCode() {
  const img = document.getElementById("qrImage");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "HKTDC-Referral-QR.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
