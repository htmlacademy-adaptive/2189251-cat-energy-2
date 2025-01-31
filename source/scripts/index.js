//скрипт для бургер-меню
const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav-toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});

//скрипт для слайдера
const slider = document.getElementById('slider-line');
const imageRight = document.querySelector('.example__image--before');

let isDragging = false;

slider.addEventListener('mousedown', () => {
  isDragging = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) {
    return;
  }

  const rect = slider.parentNode.getBoundingClientRect();
  let offsetX = e.clientX - rect.left; // Положение курсора относительно контейнера
  offsetX = Math.max(0, Math.min(offsetX, rect.width)); // Ограничиваем перемещение

  slider.style.left = `${offsetX}px`; // Перемещение линии

  // Изменяем положение изображения
  const percentage = offsetX / rect.width * 100;
  imageRight.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`; // Изменяем видимость правого изображения
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

//
document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('yandex-map');
  iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad224644410c55b2ed14431db75f96f5f9b20f7bae6f613c488ede772f53925b8&amp;source=constructor';
  iframe.style.display = 'block';

  const noscript = document.querySelector('map__image');
  if (noscript) {
    noscript.style.display = 'none';
  }
});
