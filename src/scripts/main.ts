import "../styles/main.scss";
import ScrollHeader from "./scrollHeader";
import { Sliders, BackTopButton } from "./components";
import Scroll from "./services/scroll";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", (): void => {
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

  // Initialize sliders
  const sliders = new Sliders();
  sliders.initIndustriesSlider();
});
