const scrollToTopBtn = document.querySelector('#scroll_to_top');
const rootElement = document.documentElement;

window.onscroll = () => {
  if (rootElement.scrollTop > 400) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);