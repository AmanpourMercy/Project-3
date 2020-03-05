"use strict";

let slides = document.getElementsByClassName("container-slider");
let currentNumber = 0;
let itemMenu = document.getElementsByClassName("item_menu-slider");
let itemPagination = document.getElementsByClassName("item-pagination");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

function nextSlide() {
  if (currentNumber === 0) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[1].classList.add("active");
    currentNumber = 1;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[1].classList.add("active");
    itemMenu[1].classList.add("current");
    return;
  }

  if (currentNumber === 1) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[2].classList.add("active");
    currentNumber = 2;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[2].classList.add("active");
    itemMenu[2].classList.add("current");
    return;
  }

  if (currentNumber === 2) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[0].classList.add("active");
    currentNumber = 0;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[0].classList.add("active");
    itemMenu[0].classList.add("current");
  }
}

function prevSlide() {
  if (currentNumber === 0) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[2].classList.add("active");
    currentNumber = 2;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[2].classList.add("active");
    itemMenu[2].classList.add("current");
    return;
  }

  if (currentNumber === 1) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[0].classList.add("active");
    currentNumber = 0;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[0].classList.add("active");
    itemMenu[0].classList.add("current");
    return;
  }

  if (currentNumber === 2) {
    for (let n = 0; n < 3; n++) {
      slides[n].classList.remove("active");
    }
    slides[0].classList.add("active");
    currentNumber = 0;
    for (let i = 0; i < 3; i++) {
      itemPagination[i].classList.remove("active");
      itemMenu[i].classList.remove("current");
    }
    itemPagination[0].classList.add("active");
    itemMenu[0].classList.add("current");
    return;
  }
}

arrowRight.onclick = function () {
  nextSlide();
};

arrowLeft.onclick = function () {
  prevSlide();
};

function slideOne() {
  for (let n = 0; n < 3; n++) {
    slides[n].classList.remove("active");
  }
  slides[0].classList.add("active");
  for (let i = 0; i < 3; i++) {
    itemPagination[i].classList.remove("active");
    itemMenu[i].classList.remove("current");
  }
  itemPagination[0].classList.add("active");
  itemMenu[0].classList.add("current");
  currentNumber = 0;
}

function slideTwo() {
  for (let n = 0; n < 3; n++) {
    slides[n].classList.remove("active");
  }
  slides[1].classList.add("active");
  for (let i = 0; i < 3; i++) {
    itemPagination[i].classList.remove("active");
    itemMenu[i].classList.remove("current");
  }
  itemPagination[1].classList.add("active");
  itemMenu[1].classList.add("current");
  currentNumber = 1;
}

function slideTree() {
  for (let n = 0; n < 3; n++) {
    slides[n].classList.remove("active");
  }
  slides[2].classList.add("active");
  for (let i = 0; i < 3; i++) {
    itemPagination[i].classList.remove("active");
    itemMenu[i].classList.remove("current");
  }
  itemPagination[2].classList.add("active");
  itemMenu[2].classList.add("current");
  currentNumber = 2;
}

