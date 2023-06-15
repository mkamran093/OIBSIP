const nav = document.getElementById("mynav");
window.onscroll = function () {
  var scrollTop = window.pageYOffset;
  if (scrollTop >= 200) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};
