/*=== SHOW SCROLL TOP ===*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*=== Scroll Reveal ===*/
/*Bob up*/
ScrollReveal().reveal('.hero-img, .blog-thumbnail');

/* left */
const sr = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hero-left-box, .ser1`, {
    interval: 400
})

/* bottom */
const srb = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    reset: true
});

srb.reveal(`.wrap, .ser2, .c-item, .thumbnails-titles`, {
    interval: 400
})

/* top */
const srt = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

srt.reveal(`.cont-top, .testimonies-title`, {
    interval: 400
})

/* right */
const srr = ScrollReveal({
    origin: 'right',
    distance: '10px',
    duration: 2000,
    reset: true
});

srr.reveal(`.ser3`, {
    interval: 400
})