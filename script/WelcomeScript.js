const welcome = document.querySelector('.welcome')

welcome.addEventListener('animationend', (e) => {
    if(e.animationName === 'welcomeContainer'){
        welcome.classList.add('welcomeNone')
        document.querySelector('html').classList.remove('bodyBlock')
    }
})