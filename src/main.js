var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
function scramble(word) {
  let arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
const load = setInterval(() => {
  if (document.readyState === "interactive") {
  gsap.to("#dexar", { text: scramble("ExDexar"), duration: 0.5 });
  document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#dexar", { text: scramble("ExDexar"), duration: 0.5 });
    doSomething();
    clearInterval(load);
  });
} else {
    gsap.to("#dexar", { text: scramble("SiRajin"), duration: 0.5 });
    doSomething();
    clearInterval(load);
}
}, 700);
function doSomething() {
  gsap.to("#dexar", { text: 'SiRajin', duration: 1, delay: 0.75 });
  setTimeout(() => {
    document.getElementById('loadscreen').style.opacity = "0"
  }, 2000);
  setTimeout(() => {
    document.getElementById('loadscreen').style.display = "none"
    document.querySelector('body').style.overflow = "auto"
  }, 2750);
}
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
setTimeout(() => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, 3750);

const splitTypes = document.querySelectorAll('.desca')
splitTypes.forEach((char,i) => {
    const text = new SplitType(char, { types: 'words'})
    gsap.from(text.words,{
        scrollTrigger: {
            trigger: char,
            start: 'top 85%',
            end: '+=30%',
            scrub: true,
            delay: 2,
        },
        opacity: 0.3,
        stagger: 1,
    })
})
})