const navBarDown = document.getElementById('nav-bar-down');
const closeBtn = document.getElementById('close-btn');

const thingsToDoBtn = document.getElementById('things-to-do');
const accommodationsBtn = document.getElementById('accommodations');
const travelPlansBtn = document.getElementById('travel-plans');
const faqBtn = document.getElementById('faq');

const thingsToDoChev = document.getElementById('things-to-do-chev');
const accommodationsChev = document.getElementById('accommodations-chev');
const travelPlansChev = document.getElementById('travel-plans-chev');
const faqChev = document.getElementById('faq-chev');

const thingsToDoOptions = document.getElementById('things-to-do-options');
const accommodationsOptions = document.getElementById('accommodations-options');
const travelPlansOptions = document.getElementById('travel-plans-options');
const faqOptions = document.getElementById('faq-options');

thingsToDoBtn.addEventListener('click', openNavBar);
accommodationsBtn.addEventListener('click', openNavBar);
travelPlansBtn.addEventListener('click', openNavBar);
faqBtn.addEventListener('click', openNavBar);

closeBtn.addEventListener('click', () => {
    navBarDown.classList.add('hide');
    thingsToDoChev.innerHTML = '&#x2304;';
    accommodationsChev.innerHTML = '&#x2304;';
    travelPlansChev.innerHTML = '&#x2304;';
    faqChev.innerHTML = '&#x2304;';

    thingsToDoChev.classList.remove('chevron-up');
    accommodationsChev.classList.remove('chevron-up');
    travelPlansChev.classList.remove('chevron-up');
    faqChev.classList.remove('chevron-up');

    thingsToDoChev.classList.add('chevron-down');
    accommodationsChev.classList.add('chevron-down');
    travelPlansChev.classList.add('chevron-down');
    faqChev.classList.add('chevron-down');

    thingsToDoOptions.classList.add('hide');
    accommodationsOptions.classList.add('hide');
    travelPlansOptions.classList.add('hide');
    faqOptions.classList.add('hide');
});

function openNavBar(event) {
    navBarDown.classList.remove('hide');
    
    // Use currentTarget to ensure we are looking at the button itself
    const clickedBtn = event.currentTarget; 

    // Reset all chevrons first (recommended)
    thingsToDoChev.innerHTML = '&#x2304;';
    accommodationsChev.innerHTML = '&#x2304;';
    travelPlansChev.innerHTML = '&#x2304;';
    faqChev.innerHTML = '&#x2304;';

    // Toggle the correct chevron
    if (clickedBtn === thingsToDoBtn) {
        thingsToDoChev.innerHTML = '&#x2303;';
        thingsToDoChev.classList.add('chevron-up');
        thingsToDoChev.classList.remove('chevron-down');
        thingsToDoOptions.classList.remove('hide');
    } else if (clickedBtn === accommodationsBtn) {
        accommodationsChev.innerHTML = '&#x2303;';
        accommodationsChev.classList.add('chevron-up');
        accommodationsChev.classList.remove('chevron-down');
        accommodationsOptions.classList.remove('hide');
    } else if (clickedBtn === travelPlansBtn) {
        travelPlansChev.innerHTML = '&#x2303;';
        travelPlansChev.classList.add('chevron-up');
        travelPlansChev.classList.remove('chevron-down');
        travelPlansOptions.classList.remove('hide');
    } else if (clickedBtn === faqBtn) {
        faqChev.innerHTML = '&#x2303;';
        faqChev.classList.add('chevron-up');
        faqChev.classList.remove('chevron-down');
        faqOptions.classList.remove('hide');
    }
}
