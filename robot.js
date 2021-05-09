const bars = () => {
  const tl = new TimelineMax({
    onComplete: bars
  });
  const scale = () => {
    return Math.random() * 2.5;
  };

  const color = () => {
    const colors = ["green", "red", "yellow"];
    return colors[Math.floor(Math.random() * 3)];
  };
  // const voiceBars = document.querySelector('#voice-bars');
  const barsElement = document.querySelectorAll("#voice-bars > *");
  tl.set(barsElement, {
    y: -30,
    transformOrigin: "50% 50%"
  });
  tl.staggerTo(
    barsElement,
    0.5,
    {
      scaleY: scale,
      repeat: 1,
      yoyo: true,
      fill: color,
      ease: Bounce.easeIn
    },
    0.1
  );
  return tl;
};

const blink = () => {
  const tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 3,
    delay: 2
  });
  const eyes = document.querySelectorAll("#eye-left, #eye-right");
  tl.set(eyes, {
    transformOrigin: "50% 50%"
  })
    .set(eyes[1], {
      fill: "red"
    })
    .to(eyes, 0.1, {
      scaleY: 0
    })
    .to(eyes, 0.05, {
      scaleY: 1
    })
    .to(
      eyes,
      0.12,
      {
        scaleY: 0
      },
      "+=0.5"
    )
    .to(eyes, 0.03, {
      scaleY: 1
    })
    .to(
      eyes,
      0.08,
      {
        scaleY: 0
      },
      "+=1.5"
    )
    .to(eyes, 0.08, {
      scaleY: 1
    });

  return tl;
};

const move = legs => {
  // console.log(elements);
  const tl = new TimelineMax();
  tl.staggerTo(
    legs,
    0.5,
    {
      y: -60,
      repeat: -1,
      yoyo: true,
      ease: Power0.easeNone
    },
    0.5
  );
  return tl;
};

// Master Timeline
const master = new TimelineMax();
master.add("start");
master.add(move(document.querySelectorAll("#leg-right, #leg-left")), "start");
master.add(bars(), "start");
master.add(blink(), "start");
