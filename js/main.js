// 
// document.addEventListener("DOMContentLoaded", function(event) { 
//     const modal = document.querySelector('.modal')
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const modalClose = document.querySelector('.modal__close');
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible');
//     }
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);

//     });

//     modalClose.addEventListener('click', switchModal);

//   });

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        modalClose = $('.modal__close');
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    modalClose.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var upButton = $('#up-button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
        upButton.addClass('show');
        } else {
        upButton.removeClass('show');
        }
    });

    upButton.on('click', function() {
        $('html, body').animate({scrollTop:0}, '400');
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10 )

});