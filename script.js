// === AOS INIT ===
AOS.init({
  duration: 800,
  once: true
});

// === DARK MODE TOGGLE (already wired from HTML) ===
// Toggled via button, no extra JS needed unless you want persistence

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

// === PRELOADER ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = 0;
    preloader.style.pointerEvents = "none";
    setTimeout(() => preloader.style.display = "none", 500);
  }
});
