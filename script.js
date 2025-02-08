let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll('.carousel-item');
    const totalImages = images.length;

    currentIndex = (currentIndex + step + totalImages) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}



