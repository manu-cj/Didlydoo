
//------------------------------------------------------------------------------------------
// SLEEP FUNCTION
// wait a minute! We need to sleep! 
// use: await sleep(time in ms)
// async function needed

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//------------------------------------------------------------------------------------------
// CREATE DIV
// create a container of your choice, with optionnal content and classe(s)
// Return the created div
// use: const div = createDiv('type of div',the parent,'content','classname')
// you can use null value to avoid content and class
// ex: const div = createDiv('p',parent,null,null)

export function createDiv(type,parent,content,className) {
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