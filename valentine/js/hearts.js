const heartContainer = document.body;

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "assets/pixel-heart.png";
  heart.className = "pixel-heart";
  heart.alt = "heart";

  // ✅ سایز رندوم (کوچیک تا بزرگ)
  const baseSize = 60;          // سایز پایه (بزرگ‌تر از قبل)
const randomExtra = Math.random() * 30; // تنوع
const size = baseSize + randomExtra;

heart.style.width = size + "px";
heart.style.height = size + "px";

  // ✅ موقعیت افقی رندوم
  heart.style.left = Math.random() * 100 + "vw";

  // ✅ سرعت رندوم
  const duration = Math.random() * 3 + 3; // 3 تا 6 ثانیه
  heart.style.animationDuration = duration + "s";

  heartContainer.appendChild(heart);

  // ✅ حذف بعد از انیمیشن
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// هر 300 میلی‌ثانیه یک قلب
setInterval(createHeart, 150);
