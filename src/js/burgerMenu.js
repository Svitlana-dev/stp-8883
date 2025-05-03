export function initBurgerMenu() {
  const openBtn = document.querySelector('.open-menu-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const modal = document.getElementById('mobile-menu');
  const header = document.querySelector('.header');

  if (openBtn && closeBtn && modal && header) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      header.classList.add('menu-open');
      header.classList.remove('menu-close');
      document.body.classList.add('modal-blur');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      header.classList.remove('menu-open');
      header.classList.add('menu-close');
      document.body.classList.remove('modal-blur');
    });
  }
}
