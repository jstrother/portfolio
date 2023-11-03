document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('#themeToggle').classList.toggle('hidden');
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
});