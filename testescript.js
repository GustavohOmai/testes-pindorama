// Função Floating Bottle

const pindoramaBottle = document.querySelector("#garrafa-pindorama");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(pindoramaBottle, {
  x: randomX(-1),
  y: randomX(1),
//   rotation: randomAngle(-1)
});

moveX(pindoramaBottle, 1);
moveY(pindoramaBottle, -1);
rotate(pindoramaBottle, 1);

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

// function rotate(target, direction) {
  
//   TweenLite.to(target, randomTime2(), {
//     rotation: randomAngle(direction),
//     // delay: randomDelay(),
//     ease: Sine.easeInOut,
//     onComplete: rotate,
//     onCompleteParams: [target, direction * -1]
//   });
// }


// FIM Função Floating Bottle

// gsap.to(".caixas", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

// gsap.to(".caixagarrafa", {
//   yPercent: 50,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

