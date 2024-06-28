let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections  = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +' ]').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'button' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});


const typed = new Typed('.multiple-text' ,{
    strings: ['Frontend Developer','web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: ture,
});