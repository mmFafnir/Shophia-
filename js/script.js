/*Слайдер*/
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
    grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable: true,
  },
keyboard:{
       enabld: true,
       onlyInViewport:true,
       pageUpDown: true,
   },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
   spaceBetween: 30,
   slideToClickedSlide: true,
   keyboard:{
       enabld: true,
       onlyInViewport:true,
       pageUpDown: true,
   }
});



//Бургер меню
const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger__menu');

if(iconBurger) {
    iconBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
    })
}



//Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    if(iconBurger.classList.contains('active')){
        document.body.classList.remove('lock');
        iconBurger.classList.remove('active');
        menuBurger.classList.remove('active');
    }
  })
}

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');



function addHeaderColor(){
    if (window.pageYOffset > 10) {
       header.classList.add('header_color');
    } else {
      header.classList.remove('header_color');
    }
}
window.onscroll=addHeaderColor;
addHeaderColor();
