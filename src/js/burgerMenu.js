export function initBurgerMenu() {
  const openBtn = document.querySelector('.open-menu-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const modal = document.getElementById('mobile-menu');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
}
