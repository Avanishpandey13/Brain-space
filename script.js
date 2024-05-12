
function locoGsap(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed"*/
    });
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

locoGsap()

let a = document.querySelector("body")
let curser = document.querySelector(".curser")
a.addEventListener("mousemove",(e) =>{
  
  curser.style.left = e.x + "px";
  curser.style.top = e.y +"px";

})

gsap.to(".main-nav h4",{
    y:-50,
    scrollTrigger:{
        trigger:".main-nav",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -10%",
        scrub:true,
    }
})

gsap.to(".page1",{
  filter:"blur(20px)",
  scale:0.9,
  scrollTrigger:{
    trigger:".page1",
    scroller:".main",
    // markers:true,
    start:"top 0",
    end:"top -10%",
    scrub:true,

  }
})


gsap.to(".ri-menu-line", {
  display: "block",
  scrollTrigger:{
    trigger: ".main-nav",
    scroller: ".main",
      start: "top -15%",
      end: "top -20%",
      scrub: true
  }
})


// gsap.to(".ri-menu-line", {
//   display:"block",
//   scrollTriggre:{
//     trigger:".main-nav",
//     scroller:".main",
//       start:"top -15%",
//       end:"top -20%",
//       scrub: true
//   }
// })

gsap.to(".page2-img",{
  x:40,

  duration:10,
  repeat:-1,
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    start:"top -15%",
    end:" top -20%",
  }
})

gsap.from(".page3-h1, .page3-p, .page3-button, .page3-video",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    // markers:true,
    start:"top 30%",
    end:"top 0%",
    scrub:true
  }
})

gsap.from(".page4-h1, .page4-p, .page4-button",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page4-helmet",
    scroller:".main",
    // markers:true,
    start:"top -30%",
    end:"top -45%",
    scrub:true
  }
})



gsap.from(".page5-1-h1,.page5-1-video, .page5-2-video, .page5-2-h1,.page5-button",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    start:"top 30%",
    end:"top 0",
    scrub:true
 }}
)

gsap.from(".page6-1-h1,.page6-1-video, .page6-2-video, .page6-2-h1,.page6-button",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page6",
    scroller:".main",
    start:"top 30%",
    end:"top 0",
    scrub:true
 }}
)

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page7",
      scroller: ".main",
      start: "top 0",
      end: "top -70%",
      scrub: 3,
      pin: true
  }
})


tl.to(".page7-content", {
  transform: "translateX(-55%)",
}, "okay")
tl.to(".page7 .slider-in", {
  x: 650,
}, "okay")

gsap.from(".page8-content1-h1,.page8-content2-left-h4,.page8-content2-right-p,.page8-content2-right-h4",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page8",
    scroller:".main",
    start:"top 30%",
    end:"top 0",
    scrub:true
 }}
)

gsap.from(".ppage9-heading,.page9-content1,.page9-content2,.page9-content3,.page9-p,.page9-button",{
  y:200,
  scale:1.1,
  scrollTrigger:{
    trigger:".page9",
    scroller:".main",
    start:"top 30%",
    end:"top 0",
    scrub:true
 }}
)


var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})

document.querySelector(".page10A").addEventListener("mousemove", function (dets) {
  document.querySelector(".page10A").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
})





