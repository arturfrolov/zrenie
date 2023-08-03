function hamburgerMenu(hamburgerSelector, menuSelector, closeElemSelector) {
  const hamburger = document.querySelector(hamburgerSelector);
  const menu = document.querySelector(menuSelector);
  const close = document.querySelector(closeElemSelector);

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}

export default hamburgerMenu;
