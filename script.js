

// TODO!!! Бургер HEADER

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  
  navList.classList.toggle('active');  
});











// // TODO!!!! Canvas

// // JavaScript to create a dynamic gradient background
// const canvas = document.getElementById('colorCanvas');
// const ctx = canvas.getContext('2d');

// // Set canvas dimensions
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let gradientOffset = 0;

// // Function to draw a dynamic gradient
// function drawDynamicGradient() {
//     gradientOffset += 0.005; // Controls the speed of the gradient's movement
//     const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

//     gradient.addColorStop(0, `hsl(${(gradientOffset * 100) % 360}, 70%, 60%)`);
//     gradient.addColorStop(1, `hsl(${(gradientOffset * 100 + 180) % 360}, 70%, 60%)`);

//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     requestAnimationFrame(drawDynamicGradient);
// }

// // Resize handler
// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// drawDynamicGradient();


































































































// TODO!!!! СТРЕЛКА НАВЕРХ FUTER

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

