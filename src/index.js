const rate = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let next = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (next< now) {
      next =now +rate;
      tick()
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

// init();