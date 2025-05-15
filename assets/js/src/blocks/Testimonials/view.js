// Get all testimonial blocks on the page
const testimonialBlocks = document.querySelectorAll('.at-block-testimonials__swiper');

// Initialize each testimonial block
for (let i = 0; i < testimonialBlocks.length; i++) {
    const block = testimonialBlocks[i];
    // Get the swiper options from the data attribute
    const swiperOptions = JSON.parse(block.getAttribute('data-swiper-options') || '{}');

    // Initialize Swiper with the options
    const swiper = new Swiper(block, swiperOptions);

    // Custom Navigation.
    if (swiper.slides.length > 1 && swiper.navigation) {
        const nextNavButton = block.querySelector('.at-block-nav--next');
        const prevNavButton = block.querySelector('.at-block-nav--prev');

        nextNavButton.addEventListener('click', (e) => {
            e.preventDefault();

            swiper.slideNext();
        });

        prevNavButton.addEventListener('click', (e) => {
            e.preventDefault();

            swiper.slidePrev();
        });
    }
}