//скрипт для бургер-меню
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


//скрипт для слайдера главной страницы
const slider = document.getElementById('slider-handle');
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
