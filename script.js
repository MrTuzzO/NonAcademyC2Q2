const navLinks = document.getElementById('navLinks');

function toggleMenu() {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}
function showMenuOnDesktop() {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
}
// Show the menu on desktop when the window is resized
window.addEventListener('resize', showMenuOnDesktop);

// Show the menu initially on page load for desktop view
showMenuOnDesktop();
