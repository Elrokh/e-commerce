const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
