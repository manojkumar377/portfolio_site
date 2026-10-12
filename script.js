// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Add a little animation effect on load
window.onload = () => {
  const heroText = document.querySelector('.hero h1');
  heroText.style.opacity = 0;
  setTimeout(() => {
    heroText.style.transition = 'opacity 2s';
    heroText.style.opacity = 1;
  }, 500);
};
