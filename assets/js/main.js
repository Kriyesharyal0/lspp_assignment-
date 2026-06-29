function addShow() {
  var element = document.getElementById("mobile__view");
  element.classList.add("show");

  var element = document.getElementById("mobile__class");
  element.classList.add("show");

  var element = document.getElementById("body-flow");
  element.classList.add("overflowHide");
}
function removeClass() {
  var element = document.getElementById("mobile__view");
  element.classList.remove("show");

  var element = document.getElementById("mobile__class");
  element.classList.remove("show");
  var element = document.getElementById("body-flow");
  element.classList.remove("overflowHide");
}

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};
