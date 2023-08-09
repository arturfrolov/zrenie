function search() {
  const searchBtnList = document.querySelectorAll('.js-search');
  const wrap = document.querySelector('.wrap');
  const input = document.querySelector('.input');
  const searchText = document.querySelector('.header__search_text');

  searchBtnList.forEach((searchBtn) => {
    searchBtn.addEventListener('click', () => {
      wrap.classList.toggle('active');
      input.classList.toggle('active');
      searchText.classList.toggle('hide');
      input.closest('form').reset();
      input.focus();
    });
  });
}

export default search;
