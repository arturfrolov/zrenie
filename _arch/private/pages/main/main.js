console.log(123);
const main = {
  addHandlers() {
    const button = $('.button');
    button.click(() => console.log('button click'));
  },
};

export default main;
