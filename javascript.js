const navBarDown = document.querySelector('.nav-bar-down');
const closeBtn = document.querySelector('.close-btn');

const menuItems = [
    { btn: '.things-to-do', chev: '.things-to-do-chev', opt: '.things-to-do-options' },
    { btn: '.accommodations', chev: '.accommodations-chev', opt: '.accommodations-options' },
    { btn: '.travel-plans', chev: '.travel-plans-chev', opt: '.travel-plans-options' },
    { btn: '.faq', chev: '.faq-chev', opt: '.faq-options' }
].map(item => ({
    btn: document.querySelector(item.btn),
    chev: document.querySelector(item.chev),
    opt: document.querySelector(item.opt)
}));

menuItems.forEach(item => {
    item.btn.addEventListener('click', () => openNavBar(item));
});

closeBtn.addEventListener('click', closeNavBar);

function openNavBar(selectedItem) {
    navBarDown.classList.remove('hide');
    
    menuItems.forEach(item => {
        const isMatch = item === selectedItem;
        
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
