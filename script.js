

// TODO!!! Бургер HEADER

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  
  navList.classList.toggle('active');  
});






// TODO!!! Этапы разработки сайта

function showStep(step) {
  
  const allSteps = document.querySelectorAll('.step-content');

  const stepTabs = document.querySelectorAll('.steps li');

 
  allSteps.forEach((content, index) => {
      content.style.display = index + 1 === step ? 'block' : 'none';
  });

  stepTabs.forEach((tab, index) => {
      tab.classList.toggle('active', index + 1 === step);
  });
}


document.addEventListener('DOMContentLoaded', () => showStep(1));



























































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

