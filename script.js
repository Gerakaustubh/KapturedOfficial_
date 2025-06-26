// Init AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Optional: Enhance Dark Mode Toggle Icon
const toggleButton = document.querySelector('.dark-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    toggleButton.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
  });
}

