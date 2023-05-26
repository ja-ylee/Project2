"use strict";
let burgerMenuOpenBtn = document.querySelector('.burger');
let burgerMenuBlock = document.querySelector('.burgerBlock');
let background = document.querySelector('.wrapper');
burgerMenuOpenBtn.addEventListener('click', function () {
  burgerMenuBlock.style.display = 'block';
  background.style.opacity = 0.5;
  background.style.pointerEvents = 'none';
});
let burgerMenuCloseBtn = document.querySelector('.closeBurgerMenu');
burgerMenuCloseBtn.addEventListener('click', function () {
  burgerMenuBlock.style.display = 'none';
  background.style.opacity = 1;
  background.style.pointerEvents = 'auto';
})
window.addEventListener('resize', function () {
  if (window.innerWidth > 1150) {
    burgerMenuBlock.style.display = 'none';
    background.style.opacity = 1;
    background.style.pointerEvents = 'auto';
  }
})