export default class Sliders {
  public initIndustriesSlider() {
    const industriesSliderElement = document.getElementById("industries-slider");
    if (industriesSliderElement) {
      // @ts-expect-error Swiper is not typed
      new Swiper(industriesSliderElement, {
        loop: true,
        parallax: true,
        navigation: {
          nextEl: ".industries__button--next",
          prevEl: ".industries__button--prev",
        },
        pagination: {
          el: ".industries__pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2.6,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3.6,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        },
      });
    }
  }
}
