const video = document.getElementById('player-container');
const playBtn = document.getElementById('customPlayBtn');

playBtn.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute(
    'src',
    'https://www.youtube.com/embed/qaleYCbLEXY?autoplay=1&rel=0'
  );
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  video.appendChild(iframe);
  playBtn.style.display = 'none';
});
