servicesImg = document.getElementById('services-img')
servicesHeader = document.getElementById('services-header')
servicesContent = document.getElementById('services-content')
infoBlockHeader = document.getElementById('info-block__header')
infoContent = document.getElementById('info-content')
imgsForm = document.querySelectorAll('.img-form')


window.addEventListener('scroll', ()=> {
    if(pageYOffset >= 460 && servicesHeader.className !== 'block-display') {
        servicesHeader.classList.add('block-display')
        servicesHeader.classList.add('animated')
        servicesHeader.classList.add('fadeIn')
    }
    if(pageYOffset >= 760 && servicesImg.className !== 'block-display') {
        servicesImg.classList.add('block-display')
        servicesImg.classList.add('animated')
        servicesImg.classList.add('fadeInLeft')
    }
    if(pageYOffset >= 680 && servicesContent.className !== 'block-flex') {
        servicesContent.classList.add('block-flex')
        servicesContent.classList.add('animated')
        servicesContent.classList.add('fadeInRight')
    }
    if(pageYOffset >= 1420 && infoBlockHeader.className !== 'block-display') {
        infoBlockHeader.classList.add('block-display')
        infoBlockHeader.classList.add('animated')
        infoBlockHeader.classList.add('fadeIn')
    }
    if(pageYOffset >= 1535 && infoContent.className !== 'block-flex') {
        infoContent.classList.add('block-flex')
        infoContent.classList.add('animated')
        infoContent.classList.add('fadeIn')
    }
    if(pageYOffset >= 2740 ) {
        imgsForm.forEach(el=> {
            el.classList.add('block-display')
            el.classList.add('animated')
            el.classList.add('zoomIn')
        })
    }
})