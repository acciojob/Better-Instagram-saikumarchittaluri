//your code here
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');
    let dragItem = null;

    images.forEach((image) => {
        image.addEventListener('dragstart', (e) => {
            dragItem = e.target;
        });

        image.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        image.addEventListener('drop', (e) => {
            e.preventDefault();
            if (dragItem && dragItem !== e.target) {
                // Swap background images
                const temp = e.target.style.backgroundImage;
                e.target.style.backgroundImage = dragItem.style.backgroundImage;
                dragItem.style.backgroundImage = temp;
            }
        });
    });
});
