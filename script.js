// === AOS INIT ===
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

// === PRELOADER ===
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

// === FAILSAFE: Hide preloader after timeout ===
setTimeout(() => {
  const preloader = document.getElementById("preloader");
  if (preloader && preloader.style.display !== "none") {
    preloader.style.opacity = 0;
    preloader.style.pointerEvents = "none";
    preloader.style.display = "none";
  }
}, 4000);

// === TYPING EFFECT ===
const tagline = document.querySelector(".tagline");
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = "";
  let i = 0;
  const type = () => {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  };
  setTimeout(type, 1000);
}

// === LIGHTBOX ===
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const imgs = document.querySelectorAll(".grid img");
imgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
    lightbox.appendChild(imgEl);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// === CURSOR GLOW ===
const cursor = document.createElement("div");
cursor.id = "cursorGlow";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
