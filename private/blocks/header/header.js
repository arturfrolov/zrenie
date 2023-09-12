class Header {
  constructor(
    {
      menuSelector,
      headerSelector,
      containerSelector,
      hamburgerSelector,
      closeBtnSelector,
      overlaySelector,
      searchBtnSelector,
      searchWrapSelector,
      searchInputSelector,
      searchHeaderTextSelector,
      searchMenuTextSelector,
    },
  ) {
    this.menu = document.querySelector(menuSelector);
    this.header = document.querySelector(headerSelector);
    this.close = document.querySelector(closeBtnSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.container = this.menu.querySelector(containerSelector);
    this.viewportWidth = document.documentElement.clientWidth;
    this.hamburger = document.querySelector(hamburgerSelector);
    this.searchBtnList = document.querySelectorAll(searchBtnSelector);
    this.wraps = document.querySelectorAll(searchWrapSelector);
    this.inputs = document.querySelectorAll(searchInputSelector);
    this.searchHeaderText = document.querySelector(searchHeaderTextSelector);
    this.searchMenuText = document.querySelector(searchMenuTextSelector);
  }

  checkWidth() {
    if (this.viewportWidth < 992) {
      this.header.classList.add('fixed-header');
      this.menu.classList.remove('fixed-menu');
      this.container.classList.add('p-0');
    } else {
      this.header.classList.remove('fixed-header');
      this.container.classList.remove('p-0');
    }
  }

  checkHeight() {
    if (this.viewportWidth >= 992 && window.scrollY >= 101) {
      this.menu.classList.add('fixed-menu');
      this.header.classList.remove('fixed-header');
    } else {
      this.menu.classList.remove('fixed-menu');
    }
  }

  closeMenu() {
    this.body = document.querySelector('body');
    this.body.removeAttribute('style');
    this.menu.classList.remove('active');
  }

  init() {
    this.checkWidth();
    this.checkHeight();
    window.addEventListener('resize', () => {
      this.viewportWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      );
      this.checkWidth();
      this.checkHeight();
    });
    window.addEventListener('scroll', () => {
      this.checkHeight();
    });
    this.searchBtnList.forEach((searchBtn) => {
      searchBtn.addEventListener('click', () => {
        this.wraps.forEach((wrap) => {
          wrap.classList.toggle('active');
        });
        this.inputs.forEach((input) => {
          input.classList.toggle('active');
          input.closest('form').reset();
          input.focus();
        });
        this.searchHeaderText.classList.toggle('d-none');
        this.searchMenuText.classList.toggle('d-none');
      });
    });
    this.hamburger.addEventListener('click', () => {
      this.body = document.querySelector('body');
      this.body.setAttribute('style', 'height: 100vh; overflow: hidden');
      this.menu.classList.add('active');
    });
    this.menu.addEventListener('click', (event) => {
      if (event.target === this.close || event.target === this.overlay) {
        this.closeMenu();
      } else if (event.target.className === 'menu__item' || event.target.parentElement.className === 'menu__item') {
        this.closeMenu();
      }
    });
  }
}

export default Header;
