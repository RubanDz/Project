

// TODO!!! Бургер

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  
  navList.classList.toggle('active');  
});
























// // TODO!!! ГРАФИКА КАНВАС


// const canvas = document.getElementById('matrixCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const symbols = 'const let function => () {}[];0123456789';
// const symbolArray = symbols.split('');
// const fontSize = 16;
// const columns = Math.floor(canvas.width / fontSize);

// const drops = Array(columns).fill(0);

// function drawMatrix() {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = '#0F0';
//   ctx.font = fontSize + 'px monospace';

//   for (let i = 0; i < drops.length; i++) {
//     const text = symbolArray[Math.floor(Math.random() * symbolArray.length)];
//     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//     if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       drops[i] = 0;
//     }
//     drops[i]++;
//   }

//   drawText();
// }


// function drawText() {
//   const lines = [
//     'Разработка и', 
//     'создание сайтов', 
//     'под ключ'
//   ];


//   const paddingX = canvas.width * 0.1; 
//   const paddingY = canvas.height * 0.2; 

//   const baseFontSize = Math.max(canvas.width / 30, 20); 
//   ctx.font = `${baseFontSize}px monospace`;

//   ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
//   ctx.textAlign = 'left'; 
//   ctx.textBaseline = 'top'; 

 
//   lines.forEach((line, index) => {
//     ctx.fillText(line, paddingX, paddingY + index * baseFontSize * 1.5);
//   });
// }

// setInterval(drawMatrix, 50);

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

const lines = [
  'Разработка и',
  'создание сайтов',
  'под ключ'
];

let currentLineIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100; // Скорость печати (мс)

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = symbolArray[Math.floor(Math.random() * symbolArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  drawText();
}

function drawText() {
  const paddingX = canvas.width * 0.1;
  const paddingY = canvas.height * 0.2;
  const baseFontSize = Math.max(canvas.width / 30, 20);

  ctx.font = `${baseFontSize}px "Courier New", monospace`;
  ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  for (let i = 0; i <= currentLineIndex; i++) {
    const line = lines[i];
    let charsToShow = line.length;
    if (i === currentLineIndex) {
      charsToShow = currentCharIndex;
    }
    ctx.fillText(line.slice(0, charsToShow), paddingX, paddingY + i * baseFontSize * 1.5);
  }
}

function typeEffect() {
  if (currentLineIndex < lines.length) {
    if (currentCharIndex < lines[currentLineIndex].length) {
      currentCharIndex++;
    } else {
      currentCharIndex = 0;
      currentLineIndex++;
    }
  }
}

setInterval(drawMatrix, 50);
setInterval(typeEffect, typingSpeed);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});




























// TODO!!!! СТРЕЛКА НАВЕРХ

document.getElementById('backToTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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

