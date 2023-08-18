function hamburgerMenu({
  hamburgerSelector,
  menuSelector,
  closeElemSelector,
  overlaySelector,
}) {
  const hamburger = document.querySelector(hamburgerSelector);
  const menu = document.querySelector(menuSelector);
  const close = document.querySelector(closeElemSelector);
  const overlay = document.querySelector(overlaySelector);

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

export default hamburgerMenu;
