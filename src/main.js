import './js/burgerMenu';

document.addEventListener('DOMContentLoaded', () => {
  const loadElements = document.querySelectorAll('load[src]');

  loadElements.forEach(async element => {
    const src = element.getAttribute('src');
    if (!src) return;

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const html = await response.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;

      element.replaceWith(...wrapper.childNodes);
    } catch (err) {
      console.error(`❌ Не вдалося завантажити ${src}:`, err);
      element.replaceWith(document.createComment(`Failed to load ${src}`));
    }
  });
});
