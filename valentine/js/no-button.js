const noTexts = [
  "No 😳",
  "think again",
  "come on 😭",
  "i canttt",
  "never😜",
  "try me again😏"
];

let hoverCount = 0;

noBtn.addEventListener("mouseenter", () => {
  // ✅ فرار کردن
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top  = Math.random() * 40 + "px";

  // ✅ تغییر متن
  noBtn.textContent = noTexts[hoverCount % noTexts.length];
  hoverCount++;
});
