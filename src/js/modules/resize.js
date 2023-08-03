function resize(mainSelector, addremoveSelector) {
  const container = document.querySelector(mainSelector);
  window.addEventListener('resize', () => {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    if (
      viewportWidth < 992 &&
      !container.classList.contains(addremoveSelector)
    ) {
      container.classList.add(addremoveSelector);
    } else if (
      viewportWidth >= 992 &&
      container.classList.contains(addremoveSelector)
    ) {
      container.classList.remove(addremoveSelector);
    }
  });
}

export default resize;
