import "../styles/main.scss";
import ScrollHeader from "./scrollHeader";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", (): void => {
  new ScrollHeader();
  AOS.init({
    once: true,
    duration: 600,
  });
});
