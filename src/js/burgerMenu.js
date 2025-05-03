export function initBurgerMenu() {
  const openBtn = document.querySelector('[data-open-menu]');
  const closeBtn = document.querySelector('[data-close-menu]');
  const modal = document.querySelector('[data-mobile-menu]');
  const header = document.querySelector('[data-header]');
  const body = document.body;
  const modalLinks = document.querySelectorAll('[data-mobile-menu] a');

  const closeMenu = () => {
    delete modal.dataset.visible;
    delete header.dataset.menu;
    body.style.overflow = '';
    delete body.dataset.blur;
  };

  if (openBtn && closeBtn && modal && header) {
    openBtn.addEventListener('click', () => {
      modal.dataset.visible = 'open';
      header.dataset.menu = 'open';
      body.style.overflow = 'hidden';
      body.dataset.blur = 'on';
    });

    closeBtn.addEventListener('click', closeMenu);

    modalLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        const headerOffset = header.offsetHeight;

        if (target) {
          const elementPosition =
            target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }

        closeMenu();
      });
    });
  }
}
