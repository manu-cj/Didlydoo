import { sleep, createDiv } from "./functions.js";

export async function intro() {
    //const addEvent = document.querySelector('#addEventButton')
    //addEvent.style.opacity = '0'

    const darkmode = document.querySelector('#darkmodeButton')
    darkmode.style.opacity = '0'

    await sleep(100)
    document.body.classList.add('introFadeIn')

    const title = document.querySelector('h1')
    title.classList.add('introTitle')

    
    darkmode.classList.add('introDarkmode')

    //addEvent.classList.add('introAddEvent')

    await sleep(300)

    //apparition list gauche droite
    const articles = document.querySelectorAll('article')

    listAnimation(articles)

    const footer = document.querySelector('footer')
    footer.classList.add('introFooter')

    const titleArray=title.innerText.split('');
    title.innerHTML=''

    const spans=[]
    
    for(let i=0; i<titleArray.length; i++) {
        const span = createDiv('span',title,titleArray[i])
        spans.push(span)
    }

    await sleep(1300)

    footer.classList.remove('introFooter')
    //addEvent.classList.remove('introAddEvent')
    darkmode.classList.remove('introDarkmode')
    title.classList.remove('introTitle')

    for(let i=0; i<spans.length; i++) {
        spans[i].classList.add('titleJump')
        await sleep(50)
    }
}

async function listAnimation(articles) {

    for(let i=0; i<articles.length; i++) {

        if(i%2==0) {
            articles[i].classList.add('fromLeft')
        } else {
            articles[i].classList.add('fromRight')
        }

        await sleep(250)
    }
}
