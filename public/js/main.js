const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavLinks = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year')
const cookieBtn = document.querySelector('.cookiebanner__btn')
const testingBtn = document.querySelectorAll('.testingBtn')

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

const changeLang = () => {
    console.log(window.location.pathname);
    if (window.location.pathname.includes('en')) {
        window.location.href = '/'
    } else {
        window.location.href = '/en'
    }
};

const currentYear = () => {
    const date = new Date()
    footerYear.textContent = date.getFullYear()
}

const hideCookieBanner = () => {
    cookieBanner.style.display = 'none'

}


currentYear()
testingBtn.forEach(el => el.addEventListener('click',changeLang))

cookieBtn.addEventListener('click', hideCookieBanner)
navBtn.addEventListener('click', handleNav);
//testingBtn.addEventListener('click', changeLang)



