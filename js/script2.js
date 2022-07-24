const topClass = {
  home: document.querySelector(".top_home"),
  story: document.querySelector(".top_story"),
  character: document.querySelector(".top_character"),
};

const topId = {
  sectionHome: document.querySelector("#header"),
  sectionStory: document.querySelector("#story"),
  sectionCharacter: document.querySelector("#character"),
};

topClass.home.addEventListener("click", function () {
  topId.sectionHome.scrollIntoView({ behavior: "smooth", block: "center" });
});
topClass.story.addEventListener("click", function () {
  topId.sectionStory.scrollIntoView({ behavior: "smooth", block: "center" });
});
topClass.character.addEventListener("click", function () {
  topId.sectionCharacter.scrollIntoView({ behavior: "smooth", block: "center" });
});
//
//
//parallex2
gsap.to(".pContent", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});

gsap.to(".pImage", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});
//
//
//
//글자 움직이는거
/* Set width of all animated text to match container */
let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px";
}

//
//
//
//가로로 스크롤

let scroll_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".factsContainer",
      start: "top center",
      // pin: true,
      scrub: true,
      end: "+=0",
      // markers: true,
    },
  }),
  facts = [...document.querySelectorAll(".fact")];
// scroll_tl.to(".factsContainer h2", {
//   scale: 1.5,
//   duration: 1,
//   ease: "slow",
// });
scroll_tl.to(facts, {
  xPercent: -85 * (facts.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "center center",
    pin: true,
    // horizontal: true,
    // pinSpacing:false,
    // markers: true,
    scrub: 1,
    ease: "slow",
    // snap: 1 / (facts.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => `+=${smallFactsContainer.offsetWidth}`
    end: () => `+=980`,
  },
});
