// Typing Effect
const text = "Every Frame. A Feeling.";
let i = 0;
function type() {
  if (i < text.length) {
    document.querySelector(".tagline").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
window.addEventListener("load", () => {
  setTimeout(type, 1000);
});

// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Cursor Glow
const glow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// Lightbox
document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("active");
    lightbox.innerHTML = `<img src="${img.src}" alt="full" />`;
  });
});
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("active");
});

// Music Toggle
const music = document.getElementById("bg-music");
const btn = document.getElementById("musicToggle");
btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
});

// AOS Init
AOS.init();
