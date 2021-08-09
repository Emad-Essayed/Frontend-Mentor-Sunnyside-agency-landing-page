"use strict";

let btnMenu = document.querySelector(".btn-menu"),
  menuList = document.querySelector(".menu-list"),
  menuItem = document.querySelectorAll(".menu-item");

btnMenu.addEventListener("click", handleshowMenuClick);
menuItem.forEach((btn) => {
  btn.addEventListener("click", handleActiveClick);
});

function handleshowMenuClick() {
  this.classList.toggle("opened");
  menuList.classList.toggle("show");
}

function handleActiveClick() {
  Array.from(this.parentNode.children).forEach((sibling) => {
    sibling.classList.remove("active");
  });
  this.classList.add("active");
}
