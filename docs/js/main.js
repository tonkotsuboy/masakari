const hand = document.querySelector(".hand");
const axe = document.querySelector(".axe");
const effect = document.querySelector(".effect");

new TimelineMax({ repeat: -1 })
  .add([
    TweenMax.to(hand, 0.4, { rotation: -20 }),
    TweenMax.to(axe, 0.5, { rotation: -20, x: "-=10px", y: "-=10px" })
  ])
  .delay(0.3)
  .add([
    TweenMax.to(hand, 0.4, { rotation: 90, ease: Power2.easeOut }),
    TweenMax.to(axe, 0.5, { x: "+=1200px", rotation: 300, y: "+= 20px" }),
    TweenMax.to(effect, 0.12, { alpha: 1, ease: Power2.easeOut })
  ])
  .to(effect, 0.4, { alpha: 0 })
  .delay(1)
  .add([
    TweenMax.to(hand, 0.8, { rotation: 0, ease: Power2.easeOut }),
    TweenMax.to(axe, 0.8, { rotation: 0, x: "0", y: "0", ease: Power2.easeOut })
  ])
  .play();
