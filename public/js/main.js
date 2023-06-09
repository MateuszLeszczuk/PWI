const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavLinks = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year')
const cookieBtn = document.querySelector('.cookiebanner__btn')

const cookieBanner = document.querySelector('.cookiebanner')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    allNavLinks.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.remove('is-active');
            navMobile.classList.remove('nav-mobile--active');
        })
    })
}

const currentYear = () => {
    const date = new Date()
    footerYear.textContent = date.getFullYear()
}

const hideCookieBanner = () => {
    cookieBanner.style.display = 'none'
    
}


currentYear()
cookieBtn.addEventListener('click',hideCookieBanner)
navBtn.addEventListener('click', handleNav);




