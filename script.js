
document.getElementById('image-input').addEventListener('change', function () {
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        imageContainer.style.display = 'none';
    }
});
document.getElementById('resize-button-instagram').addEventListener('click', function () {
    resizeImage(1080, 1080);
});

document.getElementById('resize-button-facebook').addEventListener('click', function () {
    resizeImage(1200, 630);
});

document.getElementById('resize-button-twitter').addEventListener('click', function () {
    resizeImage(1200, 675);
});

document.getElementById('resize-button-website').addEventListener('click', function () {
    resizeImage(600, 300);
});

function resizeImage(width, height) {
    const uploadedImage = document.getElementById('uploaded-image');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(uploadedImage, 0, 0, width, height);
    uploadedImage.src = canvas.toDataURL('image/jpeg');
}
