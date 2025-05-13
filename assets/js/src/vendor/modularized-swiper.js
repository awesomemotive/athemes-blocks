// Import Swiper core and required modules
import Swiper from 'swiper/core';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Install modules
Swiper.use([Autoplay, Pagination, Navigation]);

// Make Swiper available globally.
window.Swiper = Swiper; 