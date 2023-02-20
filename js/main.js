ScrollReveal().reveal('.derecha', { 
    delay: 1000, 
    //reset: true, 
    distance: '50px',
    origin: 'right',
});
ScrollReveal().reveal('.izq', { 
    delay: 1000, 
    //reset: true, 
    distance: '50px',
    origin: 'left',
});
ScrollReveal().reveal('.abajo', { 
    delay: 500, 
    //reset: true, 
    distance: '50px',
    origin: 'bottom',
});
ScrollReveal().reveal('.barraIzq', { 
    delay: 800, 
    //reset: true, 
    distance: '300px',
    origin: 'left',
    mobile: false,
});
ScrollReveal().reveal('.barraDer', { 
    delay: 800, 
    //reset: true, 
    distance: '300px',
    origin: 'right',
    mobile: false,
});

//----------------------------------------------------------------------------
const Btn =  document.getElementById("bt");    
const BtnMenu =  document.getElementById("Btnburger");
const navbar =  document.getElementById("menuB");
const cuerpo = document.getElementById("noScroll");


document.onclick = function name(e) {
    //cerrar menu
    if (e.target.id !== 'Btnburger' && e.target.id !== 'menuB' && e.target.id !== 'bt'){
        BtnMenu.classList.remove("togglemenu");
        navbar.classList.remove("togglemenu");
        cuerpo.classList.remove("scroll");
    }
}   

BtnMenu.onclick = function menu() {
    navbar.classList.toggle("togglemenu");
    BtnMenu.classList.toggle("togglemenu");
    cuerpo.classList.toggle("scroll");
    }

//header--------------------------------------------------------------
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    //var dropdown = document.querySelector(".dropdownCont");
    header.classList.toggle("HeaderScroll", window.scrollY > 100);
    //dropdown.classList.toggle("HeaderScroll", window.scrollY > 100);
});