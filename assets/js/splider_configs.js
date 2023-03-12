let carousel_left = document.querySelector('.carousel_left')
let carousel_right = document.querySelector('.carousel_right')

const splide = new Splide('.splide', {
    type: 'slide',
    autoplay: true,
    interval: 2000,
    // speed: 20,
    perPage: 1,
    arrows: false,
    mediaQuery: 'min',
    padding: '10px',
    rewind: true,
    // autoWidth: true,
    // fixedWidth : '50rem',
    breakpoints: {
        640: {
            perPage: 2,
            // padding: 10,
        },
        768: {
            perPage: 2,
            // padding: 10,
        },
        1024: {
            perPage: 3,
            // padding: 25,
        },
        1440: {
            perPage: 3,
            padding: 25,
        },
    },

});
splide.mount();

carousel_left.addEventListener('click', () => {
    splide.go('-1')
})

carousel_right.addEventListener('click', () => {
    splide.go('+1')
})