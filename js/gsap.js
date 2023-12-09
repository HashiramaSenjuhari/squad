gsap.registerPlugin(ScrollTrigger)

addEventListener('DOMContentLoaded',() =>{
  const sections = gsap.utils.toArray('section')
  let scrollTween = gsap.to(sections,{
    xPercent:-100*(sections.length-1),
    ease:'none',
    scrollTrigger:{
      trigger:'.wrapper',
      pin:true,
      snap:1/(sections.length-1),
      scrub:0.9,
      start:'top top',
      end:'+=4000'
    }
  })
  gsap.to('.logo',{
    fontSize: '2rem',
    x:'2rem',
    y:'-12rem',
    scrollTrigger:{
      trigger:'.begin',
      scrub:0.6,
      start:'top top',
      end:'+=3000',

    }
  })
  // gsap.to('.logo',{
  //   fontSize: '4rem',
  //   x:'2rem',
  //   y:'-10rem',
  //   scrollTrigger:{
  //     trigger:'.overview',
  //     scrub:0.6,
  //     start:'top top',
  //     end:'+=3000',

  //   }
  // })
  gsap.to('.line',{
    height:'10rem',
    scrollTrigger:{
      trigger:'.line',
      scrub:0.8,
      start:'center center',
      end:'+=3000'
    }
  })
  gsap.to('.quote',{
    x:0,
    y:0,
    scrollTrigger:{
      trigger:'.quote',
      scrub:0.8,
      start:'top bottom',
      end:'+=5000'
    }
  })
  gsap.to('.one',{
    x:0,
    y:0,
    scrollTrigger:{
      trigger:'.one',
      scrub:0.5,
      start:'top bottom',
      end:'+=5000'
    }
  })
  gsap.to('.two',{
    x:0,
    y:0,
    scrollTrigger:{
      trigger:'.block',
      scrub:0.4,
      start:'top top',
      end:'+=5000',
    }
  })
  gsap.to('.three',{
    x:0,
    y:0,
    scrollTrigger:{
      trigger:'.block',
      scrub:0.4,
      start:'top top',
      end:'+=5000',
    }
  })
  gsap.to('.block',{
    x:-20,
    y:0,
    scrollTrigger:{
      trigger:'.block',
      scrub:0.5,
      start:'top top',
      end:'+=5000'
    }
  })
  gsap.to('.group-img',{
    x:-950,
    y:400,
    scrollTrigger:{
      trigger:'.group-img',
      scrub:0.7,
      start:'top top',
      end:'+=5000'
    }
  })
  gsap.to('.glass',{
    y:0,
    scrollTrigger:{
      trigger:'.glass',
      scrub:0.7,
      start:'top top',
      end:'+=5000'
    }
  })
  
  gsap.to('.block-1',{
    y:-640,
    scrollTrigger:{
      trigger:'.block-1',
      scrub:true,
      start:'top top',
      end:'+=6000'
    }
  })
  gsap.to('.block-2',{
    y:1950,
    scrollTrigger:{
      containerAnimation:scrollTween,
      trigger:'.block-2',
      scrub:0.7,
      start:'top bottom',
      end:'+=5000'
   }
  })
  gsap.to('.profile-container',{
    y:0,
    scrollTrigger:{
      containerAnimation:scrollTween,
      trigger:'profile-container',
      scrub:0.7,
      start:'top top',
      // end:'+=6000'
    }
  })
  gsap.to('.item',{
    opacity: 1,
    duration:1,
    scrollTrigger:{
      trigger:'.item',
      scrub:0.7,
      start:'top right',
      end:'+=2000'
   }
  })
 gsap.to('.vishal-block',{
  y:-20,
  scrollTrigger:{
    trigger:'.vishal-block',
    scrub:0.8,
    start:'top bottom',
    end:'+=6000'
  }
 })
 gsap.to('.mentor >p',{
  x:0,
  scrollTrigger:{
    trigger:'.mentor >p',
    scrub:0.8,
    start:'top bottom',
    end:'+=6000'
  }
 })

 document.querySelectorAll('.project').forEach(el => {
  gsap.to(el.querySelector('.project-block-1'), {
    x: 0,
    y: 1280,
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: el.querySelector('.project-block-1'),
      scrub: 0.7,
      start: 'bottom bottom',
      end: '+=6000'
    }
  })
  gsap.to(el.querySelector('.project-block-2'), {
    x: 0,
    y: -180,
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: el.querySelector('.project-block-2'),
      scrub: 0.7,
      start: 'bottom bottom',
      end: '+=1000'
    }
  })
  gsap.to(el.querySelector('.project-block-3'), {
    x: 0,
    y: 240,
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: el.querySelector('.project-block-3'),
      scrub: 0.7,
      start: 'bottom bottom',
      end: '+=2000'
    }
  })
  gsap.to(el.querySelector('.project-main-block'), {
    opacity:1,
    x:-10,
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: el.querySelector('.project-main-block'),
      scrub: 0.7,
      start: 'top bottom',
      end: '+=500'
    }
  })
  gsap.to(el.querySelector('.container-project'),{
    y:-8800,
    scrollTrigger:{
      containerAnimation: scrollTween,
      trigger:el.querySelector('.container-project'),
      scrub:0.8,
      start:'top center',
      end:'+=5000'
    }
  })
})
})