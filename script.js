document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable-image');
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            const imageId = this.getAttribute('data-id');
            localStorage.setItem('selectedImageId', imageId);
            window.location.href = 'work.html';
        });
    });
});
