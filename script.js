/**
 * Main JavaScript file for the resume website
 * This file handles smooth scrolling, sticky navigation, and section reveal animations
 */


// Smooth scrolling for navigation links
document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.onscroll = function() {
    stickyNav();
    reveal();
};

// Reveal sections on scroll
function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// Call reveal on load
window.addEventListener('load', reveal);
