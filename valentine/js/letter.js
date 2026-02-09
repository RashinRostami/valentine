// ----- Letter Typing Effect -----
const text = `Hey my lovely,

Little Rashin wants you to always be happy.
She made this for you just to see your smile.
This is our second Valentine’s together, and I’m so happy you’re still here with me.
I hope we get through these hard days side by side.
I love you as much as we wish for Khamenei to die.
 💗`;


const typedEl = document.getElementById("typed-text");
let typingInterval;

function typeText(speed = 40) {
  clearInterval(typingInterval);
  typedEl.textContent = "";

  let i = 0;
  typingInterval = setInterval(() => {
    typedEl.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}
