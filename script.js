// Fade-In Animation on Scroll
const fadeEls = document.querySelectorAll(".fade-in");

function checkFade() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFade);
checkFade();
