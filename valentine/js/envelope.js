const wrapper = document.querySelector(".envelope-wrapper");
const timer = document.getElementById("timer");

let open = false;

wrapper.onclick = () => {
  open = !open;

  wrapper.classList.toggle("open", open);
  timer.classList.toggle("active", open);

  if (open) {
    startRelationshipTimer(); // timer.js
    typeText(40);             // ✅ از letter.js
  } else {
    clearInterval(typingInterval);
    document.getElementById("typed-text").textContent = "";
  }
};
