export default class Sliders {
  public initIndustriesSlider() {
    const industriesSliderElement = document.getElementById("industries-slider");
    if (industriesSliderElement) {
      // @ts-expect-error Swiper is not typed
      new Swiper(industriesSliderElement, {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2500,
          pauseOnMouseEnter: true,
        },
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
            allowTouchMove: true,
            simulateTouch: true,
          },
          576: {
            slidesPerView: 2.6,
            spaceBetween: 16,
            allowTouchMove: true,
            simulateTouch: true,
          },
          768: {
            slidesPerView: 3.6,
            spaceBetween: 16,
            allowTouchMove: true,
            simulateTouch: true,
          },
          992: {
            slidesPerView: 4.5,
            spaceBetween: 20,
            allowTouchMove: false,
            simulateTouch: false,
          },
        },
      });
    }
  }
  public initBaseSlider() {
    const baseSliderElement = document.getElementById("base-slider");
    if (baseSliderElement) {
      // @ts-expect-error Swiper is not typed
      new Swiper(baseSliderElement, {
        speed: 1000,
        loop: true,
        allowTouchMove: window.innerWidth < 991.98,
        simulateTouch: window.innerWidth < 991.98,
        navigation: {
          nextEl: ".base-slider__button--next",
          prevEl: ".base-slider__button--prev",
        },

        pagination: {
          el: ".base-slider__pagination",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            allowTouchMove: true,
            simulateTouch: true,
          },
          480: {
            slidesPerView: 1.7,
            spaceBetween: 16,
            allowTouchMove: true,
            simulateTouch: true,
          },
          576: {
            slidesPerView: 2.3,
            spaceBetween: 16,
            allowTouchMove: true,
            simulateTouch: true,
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
            allowTouchMove: true,
            simulateTouch: true,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
            allowTouchMove: false,
            simulateTouch: false,
          },
        },
      });
    }
  }
}
