// родитель у .lazy должен быть position: relative
let lazyloadImages;
const imgPreloader = {
  init() {
    /* eslint-disable-next-line */
    lazyloadImages = new LazyLoad({
      elements_selector: '.lazy',
      callback_reveal(el) {
        const $picture = $(el).closest('picture');
        $picture.css('position', 'relative');
        $picture.after('<div class="image-preloader"></div>');
      },
      callback_loaded(el) {
        $(el).closest('picture').next('.image-preloader').remove();
      },
      callback_error(el) {
        $(el).closest('picture').next('.image-preloader').remove();
      },
    });
  },
  update() {
    lazyloadImages.update();
  },
};

export default imgPreloader;
