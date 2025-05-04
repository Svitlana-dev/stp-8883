const video = document.getElementById('trailer');
const desktopQuery = window.matchMedia('(min-width: 1200px)');
const mobileQuery = window.matchMedia('(max-width: 320px)');
const playBtn = document.getElementById('customPlayBtn');

playBtn.addEventListener('click', () => {
  // video.play();
  playBtn.hidden = true;
});

video.addEventListener('pause', () => {
  playBtn.hidden = false;
});

video.addEventListener('ended', () => {
  playBtn.hidden = false;
});

function checkScreen() {
  if (desktopQuery.matches) {
    video.height = 500;
    video.width = 1128;
    if (window.devicePixelRatio > 2) {
      video.setAttribute('poster', './img/trailer/video_desk@2x.jpg');
    } else {
      video.setAttribute('poster', './img/trailer/video_desk@1x.jpg');
    }
  } else if (mobileQuery.matches) {
    video.height = 200;
    video.width = 288;
    if (window.devicePixelRatio > 2) {
      video.setAttribute('poster', './img/trailer/video_mob@2x.jpg');
    } else {
      video.setAttribute('poster', './img/trailer/video_mob@1x.jpg');
    }
  }
}

desktopQuery.addEventListener('change', checkScreen);
mobileQuery.addEventListener('change', checkScreen);

checkScreen();
