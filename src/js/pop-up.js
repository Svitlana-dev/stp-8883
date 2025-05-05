document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-pop-up]');
  const acceptBtn = document.querySelector('[data-pop-up-accept]');
  const declineBtn = document.querySelector('[data-pop-up-decline]');

  const accepted = localStorage.getItem('popupAccepted');

  if (!accepted && modal) {
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('popupAccepted', 'true');
    closePopup();
  });

  declineBtn?.addEventListener('click', () => {
    localStorage.removeItem('popupAccepted');
    closePopup();
  });

  function closePopup() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  }
});
