const video = document.getElementById('video');
const resultDiv = document.getElementById('result');

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then((stream) => {
        video.srcObject = stream;
        video.setAttribute('playsinline', true);
        video.play();
        requestAnimationFrame(tick);
    });

function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvasElement = document.createElement('canvas');
        canvasElement.width = video.videoWidth;
        canvasElement.height = video.videoHeight;
        const canvas = canvasElement.getContext('2d');
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
        });
        if (code) {
            resultDiv.innerHTML = 'QR Code Detected: ' + code.data;
        }
        requestAnimationFrame(tick);
    }
}
