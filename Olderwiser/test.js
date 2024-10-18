let currentImageIndex = 0;
const images = document.querySelectorAll('.hero-image');
const totalImages = images.length;

function changeImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}

// Set interval for automatic image change (every 5 seconds)
setInterval(changeImage, 5000);
