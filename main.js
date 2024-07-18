var menuicon = document.querySelector(".fa fa-bars");
var overlay = document.querySelector(".overlay");
var menu = document.querySelector(".menu-container");
var cancle = document.querySelector(".cancle");

function show() {
  overlay.style.display = "block";
  menu.style.display = "block";
}

function unshow() {
  overlay.style.display = "none";
  menu.style.display = "none";
}
