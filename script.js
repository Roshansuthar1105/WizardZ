function page1Animation() {
  var t = gsap.timeline();
  t.from("nav h1 , nav h4 , nav button", {
    y: -200,
    delay: 0.4,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
  });
  t.from(".center h1 ,.center p", {
    x: "-100%",
    opacity: 0,
    duration: 0.3,
    stagger: 0.25,
  });
  t.from(".center button", {
    y: 60,
    duration: 0.3,
    opacity: 0,
  });
  t.from(
    ".center img",
    {
      x: "100%",
      duration: 0.3,
      opacity: 0,
    },
    "-=1"
  );
  t.from(".section-bottom img", {
    // rotate: "60deg",
    duration: 0.4,
    opacity: 0,
      stagger:0.1
  });
}
function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });
  tl.from(".services", {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    ".element.a.l1",
    {
      x: "-100%",
      opacity: 0,
    },
    "l1"
  );
  tl.from(
    ".element.b.l1",
    {
      x: "100%",
      opacity: 0,
    },
    "l1"
  );
  tl.from(
    ".element.b.l2",
    {
      x: "-100%",
      opacity: 0,
    },
    "l2"
  );
  tl.from(
    ".element.a.l2",
    {
      x: "100%",
      opacity: 0,
    },
    "l2"
  );
}
function page21Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 70%",
      end: "top 20%",
      scrub: 2,
    },
  });
  tl.from(".services", {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    ".element.a.l1",
    {
      x: "-70%",
      opacity: 0,
    },
    "l1"
  );
  tl.from(
    ".element.b.l1",
    {
      x: "70%",
      opacity: 0,
    },
    "l1"
  );
  tl.from(
    ".element.b.l2",
    {
      x: "-70%",
      opacity: 0,
    },
    "l2"
  );
  tl.from(
    ".element.a.l2",
    {
      x: "70%",
      opacity: 0,
    },
    "l2"
  );
}

page1Animation();
if(window.innerWidth<768){
  page21Animation();
}else{
  page2Animation();
}