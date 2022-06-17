gsap.from('.one',{
    x:-100, y:-100, duration:2, opacity:0, stagger:2
})
gsap.from('.two',{
    x:200, y:200, duration:2, opacity:0, stagger:2
})
gsap.from('.cont',{
    x:-200, duration:2, delay:3, stagger:1, opacity:0
})
gsap.from('.conts',{
    y:-200, duration:2, delay:3, opacity:0, ease:'bounce'
})
