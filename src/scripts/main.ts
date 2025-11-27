import "../styles/main.scss";
import ScrollHeader from "./scrollHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import Sliders from "./components/Sliders";

document.addEventListener("DOMContentLoaded", (): void => {
  // Initialize scroll header
  new ScrollHeader();

  // Initialize AOS
  AOS.init({
    once: true,
    duration: 600,
  });

  // Initialize sliders
  const sliders = new Sliders();
  sliders.initIndustriesSlider();
});
