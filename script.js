// === Animate On Scroll Init ===
AOS.init({
  duration: 800,
  once: true
});

// === MUSIC TOGGLE ===
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("musicToggle");
let musicPlaying = false;

musicToggle.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    musicToggle.textContent = "🔊";
  } else {
    music.play();
    musicToggle.textContent = "🔈";
  }
  musicPlaying = !musicPlaying;
});

// === PRELOADER LOGIC ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
});

// === FAILSAFE: Hide preloader after 4 seconds just in case ===
setTimeout(() => {
  const preloader = document.getElementById("preloader");
  if (preloader && preloader.style.display !== "none") {
    preloader.style.opacity = 0;
    preloader.style.pointerEvents = "none";
    preloader.style.display = "none";
  }
}, 4000);
