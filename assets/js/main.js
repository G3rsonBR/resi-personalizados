/* Muda classe da navbar */
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = document.querySelectorAll('section');

// Função para ativar o link correto baseado na posição da rolagem
function setActiveLinkOnScroll() {
  let scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Considerando o ajuste de -100px
    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}

// Chama a função toda vez que o usuário rolar a página
window.addEventListener('scroll', setActiveLinkOnScroll);

/* Função de Scroll na página */
function scrollToElement(id) {
  event.preventDefault();
  let element = document.getElementById(id);
  
  if (id === "inicio") window.scrollTo({ top: 0, behavior: 'smooth' });
  else {
    let elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementPosition - 100, behavior: 'smooth' });
  }
}

/* Editar parametros do Carousel */
let myCarousel = document.querySelector('#carousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true
})