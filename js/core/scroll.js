
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -100;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  

  const nav = document.getElementById('headerNav');
  if (nav) nav.classList.remove('active');
}


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.addEventListener('scroll', () => {
  const scrollTop = document.getElementById('scrollTop');
  if(scrollTop) {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  }
});