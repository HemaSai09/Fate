const cameraBtn = document.getElementById('cameraBtn');
const modal = document.getElementById('cameraModal');
const closeBtn = document.getElementsByClassName('close')[0];
const video = document.getElementById('cameraFeed');

// Open the camera modal when the camera button is clicked
cameraBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  openFullscreen(video);
});

// Close the camera modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Open the camera in fullscreen mode
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }
}
