// menu

const btnClose = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlayClose = document.querySelector('.menu__overlay');

function toggleClass() {
    menu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleClass);
btnClose.addEventListener('click', toggleClass);
overlayClose.addEventListener('click', toggleClass);

// percent 

const percent = document.querySelectorAll('.percent__title-number'),
      line = document.querySelectorAll('.percent__counter span');

percent.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});



