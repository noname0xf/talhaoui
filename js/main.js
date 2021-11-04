/** scroll to top */
let scrollToTop = document.getElementById('scroll-to-top');
scrollToTop.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


/** elements animations on scroll */
let elementsAnimationsOnScrl = document.querySelectorAll('.elm-scrl-anm');
/** elements animations on scroll */

/** nav toggle */
document.getElementById('nav-links-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById(this.dataset.toggle).classList.toggle('active');
})


window.onscroll = function () {
    /** scroll to top */
    if (window.scrollY >= 500)
    scrollToTop.style.right = 0;
    else
    scrollToTop.style.right = '-60px';


    /** elements animations on scroll */
    let scrolled = window.document.documentElement.scrollTop;
    elementsAnimationsOnScrl.forEach(e => {
        if (scrolled + 500 >= e.offsetTop) {e.classList.add('show')}
    })
}