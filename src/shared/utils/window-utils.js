export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};


export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};