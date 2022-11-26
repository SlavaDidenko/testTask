import Swiper, { Scrollbar } from "swiper";

Swiper.use([Scrollbar]);
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  breakpoints: {
    320: {
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      spaceBetween: 20,
      slidesPerView: "auto",
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});