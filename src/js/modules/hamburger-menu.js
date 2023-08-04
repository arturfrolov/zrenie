function hamburgerMenu(hamburgerSelector, menuSelector, closeElemSelector) {
  const hamburger = document.querySelector(hamburgerSelector);
  const menu = document.querySelector(menuSelector);
  const close = document.querySelector(closeElemSelector);

  hamburger.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.setAttribute('style', 'height: 100vh; overflow: hidden');
    menu.classList.add('active');
  });

  close.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.removeAttribute('style');
    menu.classList.remove('active');
  });
}

export default hamburgerMenu;
