'use strict';

// Accordion menu functionality
const icons = document.querySelectorAll('.icon');
const accordionText = document.querySelectorAll('.text');
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        icons[i].classList.toggle('active');
        accordionText[i].classList.toggle('active');
        if (!icons[i]) {
            icons[i].classList.remove('active');
        }
    });
}


