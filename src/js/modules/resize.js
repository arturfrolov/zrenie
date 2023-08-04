function resize(parentSelector, targetSelector, addremoveSelector) {
  const parent = document.querySelector(parentSelector);
  const container = parent.querySelector(targetSelector);
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
