gsap.registerPlugin(DrawSVGPlugin)
gsap.to("#myImage", {
  duration: 2,
  drawSVG: "100%", // animate the drawing up to 50%
  ease: "power2.out",
});