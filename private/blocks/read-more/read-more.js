class ReadMore {
  constructor(pageUpSelector) {
    this.upBtn = document.querySelector(pageUpSelector);
  }

  init() {
    this.upBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }
}

export default ReadMore;
