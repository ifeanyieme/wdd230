document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const loadImage = (image) => {
        image.src = image.getAttribute('data-src');
        image.onload = () => {
            image.removeAttribute('data-src');
            image.classList.add('lazyloaded');
        };
    };

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px"
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });

    // Set the last modified date
    const footer = document.querySelector('#last-modified');
    footer.textContent = `Last Modified: ${document.lastModified}`;
});
