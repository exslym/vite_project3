export default function modals() {
  if (document.querySelector('.button-research') && document.querySelector('#modal')) {
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('.button-research');
    const closeModal = document.querySelector('.close-button');

    const isTablet =
      /^iP/.test(navigator.userAgent) ||
      (/^Mac/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    if (isTablet) {
      modals.forEach((modal) => {
        modal.classList.add('noPadddingRight');
      });
    }

    openModal.addEventListener('click', (e) => {
      e.preventDefault();
      /* Check if scrollbar is visible */
      if (document.body.clientHeight > window.innerHeight) {
        document.querySelector('html').classList.add('noScroll');
      } else {
        modal.style.padding = '1em';
      }

      modal.showModal();
      modal.scrollTop = 0;
      modal.addEventListener(
        'animationend',
        () => {
          modal.style.overflow = 'auto';
        },
        { once: true },
      );

      /* Google Analytics (UA) */
      // eslint-disable-next-line no-undef
      // ga(
      // 	'CNS_Portfolio_2022.send',
      // 	'event',
      // 	'button',
      // 	'click',
      // 	openModal.dataset.name
      // );
      console.log(openModal.dataset.name);
    });

    closeModal.addEventListener('click', () => {
      document.querySelector('html').classList.remove('noScroll');
      modal.setAttribute('closing', '');
      modal.style.overflow = 'hidden';
      modal.addEventListener(
        'animationend',
        () => {
          modal.removeAttribute('closing');
          modal.close();
        },
        { once: true },
      );
    });

    modal.addEventListener('click', (e) => {
      if (e.target.nodeName === 'DIALOG') {
        document.querySelector('html').classList.remove('noScroll');
        modal.setAttribute('closing', '');
        modal.style.overflow = 'hidden';
        modal.addEventListener(
          'animationend',
          () => {
            modal.removeAttribute('closing');
            modal.close();
          },
          { once: true },
        );
      }
    });
  }
}
