const cameraBtn = document.getElementById('cameraBtn');
const modal = document.getElementById('cameraModal');
const closeBtn = document.getElementsByClassName('close')[0];
const video = document.getElementById('cameraFeed');

// Open the camera modal when the camera button is clicked
cameraBtn.addEventListener('click', () => {
  openCamera();
});

// Close the camera modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  closeCamera();
});

// Open the camera
function openCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      modal.style.display = 'block';
    })
    .catch(err => {
      console.error('Error accessing camera:', err);
      alert('Error accessing camera. Please make sure your camera is connected and accessible.');
    });
}

// Close the camera
function closeCamera() {
  const stream = video.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
      track.stop();
    });
    video.srcObject = null;
  }
  modal.style.display = 'none';
}
