export async function intro() {
    document.body.classList.add('introFadeIn')

    const title = document.querySelector('h1')
    title.classList.add('introTitle')

    const darkmode = document.querySelector('#darkmodeButton')
    darkmode.classList.add('introDarkmode')

    const addEvent = document.querySelector('#addEventButton')
    addEvent.classList.add('introAddEvent')

    const footer = document.querySelector('footer')
    footer.classList.add('introFooter')

    const titleArray=title.innerText.split('');
    title.innerHTML=''

    const spans=[]
    
    for(let i=0; i<titleArray.length; i++) {
        const span = createDiv('span',title,titleArray[i])
        spans.push(span)
    }

    await sleep(2300)

    footer.classList.remove('introFooter')
    addEvent.classList.remove('introAddEvent')
    darkmode.classList.remove('introDarkmode')
    title.classList.remove('introTitle')

    for(let i=0; i<spans.length; i++) {
        spans[i].classList.add('titleJump')
        await sleep(100)
    }
}

//------------------------------------------------------------------------------------------
// SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//------------------------------------------------------------------------------------------
// CREATE DIV
function createDiv(type,parent,content,className) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
  }