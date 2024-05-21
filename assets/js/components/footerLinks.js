export function footerLinks() {
    const githubs = Array.from(document.querySelector('#socials').children)

    githubs[0].addEventListener('click', () => {
        open('https://github.com/lynekpng','_blank')
    })

    githubs[1].addEventListener('click', () => {
        open('https://github.com/manu-cj','_blank')
    })

    githubs[2].addEventListener('click', () => {
        open('https://github.com/javadaller','_blank')
    })

    document.querySelector('#becodeLogo').addEventListener('click', () => {
        open('https://becode.org','_blank')
    })
}