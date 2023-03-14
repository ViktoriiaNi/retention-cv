const aboutmail = document.querySelector('.about-mail-section')
const buttonabout = document.querySelector('.arrow-fold')

function toggleAbout() {
    aboutmail.classList.toggle('close')
    buttonabout.classList.toggle('close')
}

buttonabout.addEventListener('click', toggleAbout)