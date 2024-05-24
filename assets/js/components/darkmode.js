export function switchDarkmode() {

    let mode = localStorage.getItem('darkmode')

    if(mode==null) {
        mode='light'
        localStorage.setItem('darkmode',mode)
        lightMode()
    } else if(mode=='light') {
        lightMode()
    } else {
        darkmode()
    }

    const button = document.querySelector('#darkmodeButton')

    button.addEventListener('click', () => {
        mode = localStorage.getItem('darkmode')
        if(mode=='light') {
            mode = 'dark'
            localStorage.setItem('darkmode',mode)
            darkmode()
        } else {
            mode = 'light'
            localStorage.setItem('darkmode',mode)
            lightMode()
        }
    })
}

function lightMode() {
    document.querySelector('html').setAttribute('data-theme','light')

    const button = document.querySelector('#darkmodeButton')
    button.src='assets/images/icons/moon-line.svg'

    const svgs = Array.from(document.querySelectorAll('.svg'))
    svgs.forEach(svg => {
        svg.classList.remove('svgDark')
        svg.classList.add('svgLight')
    });

    const becode = document.querySelector('#becodeLogo')
    becode.classList.remove('becodeLogoDark')
    becode.classList.add('becodeLogoLight')
}

function darkmode() {
    document.querySelector('html').setAttribute('data-theme','dark')

    const button = document.querySelector('#darkmodeButton')
    button.src='assets/images/icons/sun-line.svg'

    const svgs = Array.from(document.querySelectorAll('.svg'))
    svgs.forEach(svg => {
        svg.classList.remove('svgLight')
        svg.classList.add('svgDark')
    });

    const becode = document.querySelector('#becodeLogo')
    becode.classList.remove('becodeLogoLight')
    becode.classList.add('becodeLogoDark')
}