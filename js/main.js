window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

//scrollReveal 
ScrollReveal().reveal('.banner', {delay:300});
ScrollReveal().reveal('.about', {delay:300});
ScrollReveal().reveal('.services', {delay:300});
ScrollReveal().reveal('.work', {delay:300});
ScrollReveal().reveal('.testimonial', {delay:300});
ScrollReveal().reveal('.contact', {delay:300});

