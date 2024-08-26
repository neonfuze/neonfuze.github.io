function handleScroll(e) {
  const divElement = e.target;
  if (divElement) {
    const isFullyScrolled = divElement.scrollHeight - divElement.scrollTop <= window.innerHeight;
    const element = document.getElementById('scrollable-child');
    if (!element) return;
    if (isFullyScrolled) {
      divElement.scrollTop += 1; // Adjust scrollTop slightly
      element.style.overflow = 'auto';
    } else {
      element.style.overflow = 'hidden';
    }
  }
}
