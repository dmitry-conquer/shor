import "../styles/main.scss";
import ScrollHeader from "./scrollHeader";
import { Sliders, BackTopButton, Accordion } from "./components";
import Scroll from "./services/scroll";
import AOS from "aos";
import { initModal } from "./utilities/modal";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", (): void => {
  // Initialize modal
  initModal();

  // Initialize scroll header
  new ScrollHeader();

  // Initialize back top button
  new BackTopButton();

  // Initialize scroll
  const scroll = new Scroll();
  scroll.initSmoothScroll();

  // Initialize AOS
  AOS.init({
    once: true,
    duration: 600,
  });

  // Initialize accordion
  new Accordion();

  // Initialize sliders
  const sliders = new Sliders();
  sliders.initIndustriesSlider();
  sliders.initBaseSlider();
});
