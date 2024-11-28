

// TODO!!! Бургер

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  
  navList.classList.toggle('active');  
});












// TODO!!! Канвас типо матрицы
// const canvas = document.getElementById('matrixCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const symbols = 'const let function => () {}[];0123456789';
// const symbolArray = symbols.split('');
// const fontSize = 16;
// const columns = Math.floor(canvas.width / fontSize);

// const drops = Array(columns).fill(0);

// function draw() {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = '#0F0'; // Зеленый цвет символов
//   ctx.font = fontSize + 'px monospace';

//   for (let i = 0; i < drops.length; i++) {
//     const text = symbolArray[Math.floor(Math.random() * symbolArray.length)];
//     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//     if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       drops[i] = 0;
//     }
//     drops[i]++;
//   }
// }

// setInterval(draw, 50);

// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = 'const let function => () {}[];0123456789';
const symbolArray = symbols.split('');
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(0);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // Зеленый цвет символов
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = symbolArray[Math.floor(Math.random() * symbolArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  drawText(); // Вызов функции для текста в центре
}

// Функция для рисования текста в центре
function drawText() {
  const text = 'Разработка и создание сайтов';
  
  // Устанавливаем размер шрифта в зависимости от ширины экрана
  const baseFontSize = Math.max(canvas.width / 20, 24); // Минимальный размер шрифта - 24px
  ctx.font = `${baseFontSize}px monospace`;

  ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'; // Полупрозрачный зеленый
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}


setInterval(drawMatrix, 50);

// Обновляем размеры канваса при изменении окна
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});






























// TODO!!!! ФАЙЛЫ КУККИ
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

   
    if (!localStorage.getItem('cookieConsent')) {
        cookieBanner.classList.remove('hidden');
    }

    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('hidden');
    });

    declineButton.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.add('hidden');
    });
});

