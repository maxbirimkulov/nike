let swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.home__arrow_next',
        prevEl: '.home__arrow_prev',
    },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false,

    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["slideshow", "download", "thumbs",     "iterateZoom", "fullscreen","close"],
        },
    },
    height: 200,
    width: 400
});
let swiperRed = new Swiper('.essence__flash_red', {
    slidesPerView: 4,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4500,
    loop: true,
    longSwipesRatio: 0,
});
let swiperBlack = new Swiper('.essence__flash_black', {
    slidesPerView: 4,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4500,
    loop: true,
    longSwipesRatio: 0,
});