const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); // finds all the nav__link s


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); // not created yet in the html
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); //removes .nav-open  from the class
    })
}); 