import anchors from './anchors';

// reset counter & current page:
export function resetLocalStorage() {
  localStorage.removeItem('counter');
  localStorage.removeItem('currentPage');
}

export function main() {
  // START PAGE:
  if (document.querySelector('.wrapper-index')) {
    resetLocalStorage();
  }

  //MENU LINKS:
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      resetLocalStorage();
      // set current page from data-label in link:
      localStorage.setItem('currentPage', link.dataset.label);

      /* Google Analytics (UA) */
      console.log(`${link.dataset.name}`);
      // eslint-disable-next-line no-undef
      // ga(
      // 	'CNS_Portfolio_2022.send',
      // 	'event',
      // 	'button',
      // 	'click',
      // 	link.dataset.name
      // );
    });
  });

  //HOME LINK FROM MENU:
  if (document.querySelector('#goHome')) {
    const goHome = document.querySelector('#goHome');
    document.querySelector('#goHome').addEventListener('click', () => {
      resetLocalStorage();

      /* Google Analytics (UA) */
      console.log(`${goHome.dataset.name}`);
      // eslint-disable-next-line no-undef
      // ga(
      // 	'CNS_Portfolio_2022.send',
      // 	'event',
      // 	'button',
      // 	'click',
      // 	goHome.dataset.name
      // );
    });
  }

  //ANCHORS in HASH:
  anchors();

  console.log(`(main) visited page: ${localStorage.getItem('currentPage')}`);
  console.log(`(main) right answers: ${+localStorage.getItem('counter')}`);
}
