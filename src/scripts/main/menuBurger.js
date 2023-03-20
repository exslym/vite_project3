export default function menuBurger() {
  if (document.querySelector('.test')) {
    const burger = document.querySelector('#burger'),
      menu = document.querySelector('#menu'),
      sections = document.querySelectorAll('section'),
      footer = document.querySelector('.footer'),
      goHome = document.querySelector('#goHome');

    burger.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('tap-to-open')) {
        burger.classList.remove('tap-to-open');
        burger.classList.add('tap-to-close');
        burger.classList.add('open-menu');
        burger.classList.remove('close-menu');
        menu.classList.add('open-menu');
        menu.classList.remove('close-menu');
        document.body.classList.add('overflow-hidden');
        sections.forEach((section) => {
          section.classList.add('non-visible');
        });
        footer.classList.add('non-visible');
        goHome.classList.add('opened');
      } else if (e.target.classList.contains('tap-to-close')) {
        burger.classList.remove('tap-to-close');
        burger.classList.add('tap-to-open');
        burger.classList.remove('open-menu');
        burger.classList.add('close-menu');
        menu.classList.remove('open-menu');
        menu.classList.add('close-menu');
        document.body.classList.remove('overflow-hidden');
        sections.forEach((section) => {
          section.classList.remove('non-visible');
        });
        footer.classList.remove('non-visible');
        goHome.classList.remove('opened');
      }
    });
  }
}
