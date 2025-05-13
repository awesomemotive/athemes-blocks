// Get all testimonial blocks on the page
var testimonialBlocks = document.querySelectorAll('.at-block-testimonials');

// Initialize each testimonial block
for (var i = 0; i < testimonialBlocks.length; i++) {
    var block = testimonialBlocks[i];
    // Get the swiper options from the data attribute
    var swiperOptions = JSON.parse(block.getAttribute('data-swiper-options') || '{}');
console.log(swiperOptions);

    // Add required modules
    // swiperOptions.modules = [Swiper.Pagination, Swiper.Navigation, Swiper.Autoplay];

    // Initialize Swiper with the options
    var swiper = new Swiper(block, swiperOptions);
}