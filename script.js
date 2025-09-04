function burstAnimation(target, color) {
  new mojs.Html({
    el: target,
    duration: 600,
    opacity: { 0: 1 },
    scale: { 0: 1 },
    easing: "elastic.out",
  }).play();

  new mojs.Burst({
    parent: target,
    radius: { 0: 80 },
    count: 12,
    degree: 360,
    children: {
      shape: "circle",
      radius: { 6: 0 },
      fill: color,
      duration: 800,
      easing: "cubic.out"
    }
  }).play();
}

function startAnimation() {
  const i = document.getElementById("i");
  const heart = document.getElementById("heart");
  const u = document.getElementById("u");
  const final = document.getElementById("final");

  setTimeout(() => burstAnimation(i, "#4B0082"), 500);
  setTimeout(() => burstAnimation(heart, "red"), 1500);
  setTimeout(() => burstAnimation(u, "#4B0082"), 2500);

  // mostra "Te Amo Rackely" no final
  setTimeout(() => {
    final.style.opacity = 1;
    new mojs.Burst({
      left: 0, top: 0,
      x: "50%", y: "100",
      radius: { 0: 120 },
      count: 20,
      children: {
        shape: "circle",
        radius: { 6: 0 },
        fill: [ "deeppink", "red", "#4B0082" ],
        duration: 1500,
        easing: "cubic.out"
      }
    }).play();
  }, 4000);
}

// iniciar animação ao carregar
startAnimation();
