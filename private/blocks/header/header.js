function header() {
  function fixedmenu() {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    let viewportWidth = document.documentElement.clientWidth;

    function checkWidth() {
      if (viewportWidth < 992) {
        header.setAttribute(
          'style',
          'position: fixed; top: 0; width: 100%; z-index: 100;',
        );
        menu.removeAttribute('style');
      } else {
        header.removeAttribute('style');
      }
    }

    function checkHeight() {
      if (viewportWidth >= 992 && window.scrollY >= 101) {
        menu.setAttribute(
          'style',
          'position: fixed; top: -1px; width: 100%; background-color: #0833C5; z-index: 100;',
        );
        header.removeAttribute('style');
      } else {
        menu.removeAttribute('style');
      }
    }

    window.addEventListener('resize', () => {
      viewportWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      );
      checkWidth();
      checkHeight();
    });

    window.addEventListener('scroll', checkHeight);

    checkWidth();
    checkHeight();
  }
  function search() {
    const searchBtnList = document.querySelectorAll('.js-search');
    const wraps = document.querySelectorAll('.header .wrap');
    const inputs = document.querySelectorAll('.header .input');
    const searchHeaderText = document.querySelector('.header__search_text');
    const searchMenuText = document.querySelector('.menu__search_text');

    searchBtnList.forEach((searchBtn) => {
      searchBtn.addEventListener('click', () => {
        wraps.forEach((wrap) => {
          wrap.classList.toggle('active');
        });
        inputs.forEach((input) => {
          input.classList.toggle('active');
          input.closest('form').reset();
          input.focus();
        });
        searchHeaderText.classList.toggle('d-none');
        searchMenuText.classList.toggle('d-none');
      });
    });
  }
  function hamburgerMenu() {
    const hamburger = document.querySelector('.js-hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.js-menu__close');
    const overlay = document.querySelector('.overlay');

    function closeMenu() {
      const body = document.querySelector('body');
      body.removeAttribute('style');
      menu.classList.remove('active');
    }

    hamburger.addEventListener('click', () => {
      const body = document.querySelector('body');
      body.setAttribute('style', 'height: 100vh; overflow: hidden');
      menu.classList.add('active');
    });

    menu.addEventListener('click', (event) => {
      if (event.target === close || event.target === overlay) {
        closeMenu();
      } else if (event.target.className === 'menu__item' || event.target.parentElement.className === 'menu__item') {
        closeMenu();
      }
    });
  }

  fixedmenu();
  search();
  hamburgerMenu();
}

export default header;
