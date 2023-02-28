// function abcd(hei) {
//     let content = document.querySelector('.content');
//     let carouselIndecator = document.querySelector('.carousel-indicators');
//     // console.log(content.clientHeight);
//     carouselIndecator.style.top = `${hei}px`;
// }
// abcd();
// const contentCarousel = document.getElementById('content_one');
// contentCarousel.addEventListener('slid.bs.carousel', (event) => {
//     console.log('hi');
//     abcd(event.target.offsetHeight);
//     console.log(event.target.offsetHeight);
// });

const contentOne = document.querySelector('#content_one');
const contentTwo = document.querySelector('#content_two');

new bootstrap.Carousel(contentOne, {
    interval: 5000,
});

new bootstrap.Carousel(contentTwo, {
    interval: 6000,
});

const toBnNumber = (enNum) => {
    const nums = { 0: '০', 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯' };
    return enNum.toString().replace(/[0123456789]/g, (m) => nums[m]);
};

$(document).ready(function () {
    $('.best-content-carousel').owlCarousel({
        margin: 30,
        loop: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });

    $('.innovation-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        nav: true,
        dots: true,
        // dotsData: true,
    });

    $('.hero-notice-carousel').owlCarousel({
        items: 1,
        // loop: true,
        autoplay: false,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa-solid fa-arrow-left-long left"></i>',
            '<i class="fa-solid fa-arrow-right-long right"></i>',
        ],
        // dotsData: true,
    });

    $('.admin-notice-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        // dotsData: true,
    });

    $('.blog-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        margin: 40,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    });

    $(() => {
        if ($('.innovation-carousel').length) {
            $('.innovation-carousel .owl-nav').css({
                '--offset-x': `${$('.innovation-carousel .owl-dots').width()}px`,
            });
        }
    });

    // show use marque in hero area
    $(() => {
        const marqueHeight = $('#news').height();
        // console.log(marqueHeight);
        if (marqueHeight) {
            $('#hero').css({
                '--hero-bg-height': `${marqueHeight}px`,
            });
        }
    });

    //dynamicly set current year
    const year = new Date().getFullYear();
    $('#current_year').text(toBnNumber(year));

    //popup video
    $(document).ready(function () {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false,
        });
    });

    // sticky nav
    $(function () {
        // Show hide/nav in page load
        showHideNav();

        $(window).scroll(function () {
            showHideNav();
        });

        function showHideNav() {
            if ($(window).scrollTop() > 50) {
                $('nav').addClass('black-nav-top');
            } else {
                $('nav').removeClass('black-nav-top');
            }
        }
    });

    //dsfdsffdsf
});
