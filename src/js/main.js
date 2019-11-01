//import TimelineMax = gsap.TimelineMax;
//import TweenMax = gsap.TweenMax;
// import { TweenMax, TimelineMax } from "gsap";
// import TweenMax = gsap.TweenMax;
// import TweenMax = gsap.TweenMax;
// import Power2 = gsap.Power2;
// import TimelineMax = gsap.TimelineMax;
var hand = document.querySelector(".hand");
var axe = document.querySelector(".axe");
var effect = document.querySelector(".effect");
// TweenMax.to(photo, 2, { rotation : 54 });
new TimelineMax()
    .add([
    TweenMax.to(hand, 0.4, { rotation: -20 }),
    TweenMax.to(axe, 0.5, { rotation: -20, x: "-=10px", y: "-=10px" })
])
    .delay(0.1)
    .add([
    TweenMax.to(hand, 0.4, { rotation: 90, ease: Power2.easeOut }),
    TweenMax.to(axe, 0.5, { x: "+=800px", rotation: 300, y: "+= 20px" }),
    TweenMax.to(effect, 0.12, { alpha: 1, ease: Power2.easeOut })
])
    .to(effect, 0.4, { alpha: 0 })
    .play();
