gsap.fromTo('.layer-1', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: .8
});

gsap.fromTo('.layer-2', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1
});

gsap.fromTo('.layer-3', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1.2
});

gsap.fromTo('.layer-4', {
    x: '30rem',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1.3
});

const bgLime = 'linear-gradient(247.65deg, #88493B 1.21%, #43140E 139.75%)';
const bgGinger = 'linear-gradient(254.85deg, #454e41 -10.53%, #363636 130.97%)';
const bgPine = ' linear-gradient(247.32deg, #C5C0AA 0%, #D8D6C4 100%)';
const bgGrape = 'linear-gradient(254.85deg, #454e41 -10.53%, #363636 130.97%)';

const nextArrow = document.querySelector('#next-arrow');

let contador = 1;

nextArrow.addEventListener('click', () => {

    contador++;

    switch (contador) {

        case 1:
            gsap.to(".product-section", {
                duration: 2,
                background: bgGinger,
            });

            gsap.to(".layer-6", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-4', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"

            });

            // more animation code for case 2

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });

            break;
        case 2:

            gsap.to(".product-section", {
                duration: 2,
                background: bgLime,
            });

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });

            gsap.to(".layer-4", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-5', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"
            });
            break;

       

        case 3:
            gsap.to(".product-section", {
                duration: 2,
                background: bgPine,
            });


            gsap.to(".layer-5", {
                x: -10000,
                display: "none",
            });
            gsap.fromTo('.layer-6', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .5,
                position: "relative",
                display: "block"
            });

            // more animation code for case 3

            gsap.fromTo('.layer-1', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: .8
            });

            gsap.fromTo('.layer-2', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1
            });

            gsap.fromTo('.layer-3', {
                x: '30rem',
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: 'back.out(1.7)',
                delay: 1.2
            });
            contador=0;
            break;
        default:
            console.log("Invalid contador value");
            break;
    }

});


window.onload = function() {
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
      scale: 1.8,
      overflow: true
    });
  };