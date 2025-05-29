// Load more.
const loadMoreButtons = document.querySelectorAll('.at-block-post-grid__load-more');

for (let i = 0; i < loadMoreButtons.length; i++) {
    const loadMoreButton = loadMoreButtons[i];

    // Add click event listener to the load more button.
    loadMoreButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the post grid block.
        const postGridBlock = loadMoreButton.closest('.at-block-post-grid');

        // Do ajax request to get the next page (with xhr).
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', loadMoreButton.getAttribute('data-load-more-url'), true);
        // xhr.setRequestHeader('X-WP-Nonce', loadMoreButton.getAttribute('data-nonce'));
        // xhr.send();

        // xhr.onload = () => {
        //     if (xhr.status === 200) {

        //     }
    });
}

// Get all post grid blocks on the page
const postGridBlocks = document.querySelectorAll('.at-block-post-grid__swiper');

for (let i = 0; i < postGridBlocks.length; i++) {
    const block = postGridBlocks[i];
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