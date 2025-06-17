/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./assets/js/src/blocks/Team/view.js ***!
  \*******************************************/
// Get all team blocks on the page
const teamBlocks = document.querySelectorAll('.at-block-team');

// Initialize each team block
for (let i = 0; i < teamBlocks.length; i++) {
  const block = teamBlocks[i];
  const swiperEl = block.querySelector('.at-block-swiper-wrapper .swiper');
  if (swiperEl) {
    // Get the swiper options from the data attribute
    const swiperOptions = JSON.parse(swiperEl.getAttribute('data-swiper-options') || '{}');

    // Initialize Swiper with the options
    const swiper = new Swiper(swiperEl, swiperOptions);

    // Custom Navigation.
    if (swiper.slides.length > 1 && swiperOptions.navigation) {
      const nextNavButton = block.querySelector('.at-block-nav--next');
      const prevNavButton = block.querySelector('.at-block-nav--prev');

      // Add accessibility attributes to navigation buttons
      nextNavButton.setAttribute('role', 'button');
      nextNavButton.setAttribute('aria-label', 'Next slide');
      nextNavButton.setAttribute('tabindex', '0');
      prevNavButton.setAttribute('role', 'button');
      prevNavButton.setAttribute('aria-label', 'Previous slide');
      prevNavButton.setAttribute('tabindex', '0');
      nextNavButton.addEventListener('click', e => {
        e.preventDefault();
        swiper.slideNext();
      });
      prevNavButton.addEventListener('click', e => {
        e.preventDefault();
        swiper.slidePrev();
      });

      // Add keyboard navigation support
      nextNavButton.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          swiper.slideNext();
        }
      });
      prevNavButton.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          swiper.slidePrev();
        }
      });
    }
  }
}
/******/ })()
;
//# sourceMappingURL=view.js.map