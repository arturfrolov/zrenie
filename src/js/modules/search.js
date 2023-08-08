function search() {
  const searchBtn = document.querySelector('.js-search');
  const wrap = document.querySelector('.wrap');
  const input = document.querySelector('.input');

  searchBtn.addEventListener('click', () => {
    wrap.classList.toggle('active');
    input.classList.toggle('active');
    input.focus();
  });
}

export default search;
