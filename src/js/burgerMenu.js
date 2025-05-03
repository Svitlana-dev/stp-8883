export function initBurgerMenu() {
  const openBtn = document.querySelector('[data-open-menu]');
  const closeBtn = document.querySelector('[data-close-menu]');
  const modal = document.querySelector('[data-mobile-menu]');
  const header = document.querySelector('[data-header]');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const body = document.body;

  const closeMenu = () => {
    delete modal.dataset.visible;
    delete header.dataset.menu;
    body.style.overflow = '';
    delete body.dataset.blur;
    main.removeAttribute('inert');
    footer.removeAttribute('inert');
  };

  if (openBtn && closeBtn && modal && header) {
    openBtn.addEventListener('click', () => {
      modal.dataset.visible = 'open';
      header.dataset.menu = 'open';
      body.style.overflow = 'hidden';
      body.dataset.blur = 'on';

      main.setAttribute('inert', '');
      footer.setAttribute('inert', '');
    });

    closeBtn.addEventListener('click', closeMenu);

    document.querySelectorAll('[data-mobile-menu] a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        const headerOffset = header.offsetHeight;

        if (target) {
          const position = target.getBoundingClientRect().top + window.scrollY;
          const offset = position - headerOffset;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }

        closeMenu();
      });
    });
  }
}
