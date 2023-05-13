"use strict";

class Loopstudios {
  mobileBtn = document.querySelector(".mobile-nav-btn");
  headerEl = document.querySelector(".header");
  constructor() {
    this.mobileBtn.addEventListener("click", this.toggleMobileNav.bind(this));
  }

  toggleMobileNav() {
    this.headerEl.classList.toggle("open-nav");
    document.documentElement.classList.toggle("scroll-lock");
  }
}

const app = new Loopstudios();
