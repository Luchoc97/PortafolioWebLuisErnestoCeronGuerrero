gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let panels = gsap.utils.toArray(".panel"),
    scrollTween;

function goToSection(i) {
scrollTween = gsap.to(window, {
    scrollTo: {y: i * innerHeight, autoKill: false},
    duration: 1,
    onComplete: () => scrollTween = null,
    overwrite: true
});
}

panels.forEach((panel, i) => {
ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "+=200%",
    onToggle: self => self.isActive && !scrollTween && goToSection(i)
});
});

// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
ScrollTrigger.create({
start: 0, 
end: "max",
snap: 1 / (panels.length - 1)
})
ScrollTrigger.normalizeScroll(true);

//----------------------------------------------------------------------------------------------------------------
/*ScrollReveal().reveal('.arriba', { 
    delay: 1500, 
    //reset: true, 
    distance: '50px',
    origin: 'top',
});*/

ScrollReveal().reveal('.btnWh', { 
    delay: 1500, 
    //reset: true, 
    distance: '50px',
    origin: 'right',
});
ScrollReveal().reveal('.btnCorr', { 
    delay: 2000, 
    //reset: true, 
    distance: '50px',
    origin: 'right',
});
ScrollReveal().reveal('.derecha', { 
    delay: 500, 
    reset: true, 
    distance: '50px',
    origin: 'right',
});
ScrollReveal().reveal('.izq', { 
    delay: 500, 
    reset: true, 
    distance: '50px',
    origin: 'left',
});
ScrollReveal().reveal('.abajo', { 
    delay: 500, 
    reset: true, 
    distance: '50px',
    origin: 'bottom',
});