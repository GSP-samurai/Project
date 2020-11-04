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

    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // Строчное правило
            userName: "required",
            userPhone: "required",
            // Правило-объект (блок)
            userEmail: {
              required: true,
              email: true
            }
        }, // Сообщения
        messages: {
            userName: "Имя обязательно",
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите ваш Email",
                email: "Введите в формате: name@domain.com"
            }
        },
        
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $('form').serialize(),
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);
                    alert('Форма отправлена, мы свяжемся с вами в течение 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        }
    });

    // Маска для номера телефона

    $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

    var player;

    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '465',
            width: '100%',
            videoId: 'MQ0DU4Wc79o',
            events: {
                'onReady': videoPlay,
            }
        });
    })

    function videoPlay(event) { 
        event.target.playVideo();
     }
});