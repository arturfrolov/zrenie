function resize(parentSelector, targetSelector, addremoveSelector) {
  const parent = document.querySelector(parentSelector);
  const container = parent.querySelector(targetSelector);
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  function checkWidth() {
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
  }

  window.addEventListener('resize', checkWidth);

  checkWidth();
}

export default resize;
