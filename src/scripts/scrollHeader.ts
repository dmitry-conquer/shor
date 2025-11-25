export default class ScrollHeader {
  private rootElement: HTMLElement | null;
  private readonly states: Record<string, string> = {
    isScrolled: "is-scrolled",
  };
  private scrollOffset: number;
  private isTicking: boolean = false;

  constructor() {
    this.scrollOffset = 100;
    this.rootElement = document.getElementById("main-header");
    if (!this.rootElement) return;
    this.bindEvents();
  }

  private toggleVisibility = () => {
    if (!this.rootElement) return;
    const isScrolled = window.scrollY > this.scrollOffset;
    this.rootElement.classList.toggle(this.states.isScrolled, isScrolled);
    this.isTicking = false;
  };

  private onScroll = () => {
    if (!this.isTicking) {
      this.isTicking = true;
      requestAnimationFrame(this.toggleVisibility);
    }
  };

  private bindEvents(): void {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }
}
