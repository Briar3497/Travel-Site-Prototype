const navBarDown = document.querySelector('.nav-bar-down');
const closeBtn = document.querySelector('.close-btn');
const flightSearchBtn = document.getElementById('flight-search');
const cruiseSearchBtn = document.getElementById('cruise-search');

const menuItemsMain = [
    { btn: '.things-to-do-main', chev: '.things-to-do-chev', opt: '.things-to-do-options' },
    { btn: '.accommodations-main', chev: '.accommodations-chev', opt: '.accommodations-options' },
    { btn: '.travel-plans-main', chev: '.travel-plans-chev', opt: '.travel-plans-options' },
    { btn: '.faq-main', chev: '.faq-chev', opt: '.faq-options' }
].map(item => ({
    btn: document.querySelector(item.btn),
    chev: document.querySelector(item.chev),
    opt: document.querySelector(item.opt)
}));

const menuItemsSecondary = [
    { btn: '.things-to-do-secondary', chev: '.things-to-do-chev', opt: '.things-to-do-options' },
    { btn: '.accommodations-secondary', chev: '.accommodations-chev', opt: '.accommodations-options' },
    { btn: '.travel-plans-secondary', chev: '.travel-plans-chev', opt: '.travel-plans-options' },
    { btn: '.faq-secondary', chev: '.faq-chev', opt: '.faq-options' }
].map(item => ({
    btn: document.querySelector(item.btn),
    chev: document.querySelector(item.chev),
    opt: document.querySelector(item.opt)
}));

const menuItems = [...menuItemsMain, ...menuItemsSecondary];

menuItemsMain.forEach(item => {
    item.btn.addEventListener('click', () => openNavBar(item));
});

menuItemsSecondary.forEach(item => {
    item.btn.addEventListener('click', () => openNavBar(item));
});

closeBtn.addEventListener('click', closeNavBar);

function openNavBar(selectedItem) {
    navBarDown.classList.remove('hide');
    
    menuItems.forEach(item => {
        const isMatch = item.opt === selectedItem.opt;
        
        item.chev.innerHTML = isMatch ? '&#x2303;' : '&#x2304;';
        item.chev.classList.toggle('chevron-up', isMatch);
        item.chev.classList.toggle('chevron-down', !isMatch);
        
        item.opt.classList.toggle('hide', !isMatch);
    });
}

function closeNavBar() {
    navBarDown.classList.add('hide');
    menuItems.forEach(item => {
        item.opt.classList.add('hide');
        item.chev.innerHTML = '&#x2304;';
        item.chev.classList.replace('chevron-up', 'chevron-down');
    });
}

flightSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const flights = document.querySelectorAll('.flight');
    flights.forEach(flight => flight.classList.remove('hide'));
});

cruiseSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cruises = document.querySelectorAll('.cruise');
    cruises.forEach(cruise => cruise.classList.remove('hide'));
});
