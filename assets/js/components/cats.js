import { sleep } from "./functions.js";

export async function cats() {
    let randomCat,animation;
    const cats = Array.from(document.querySelectorAll('.cats'))

    while(true) {
        await sleep(getRandomInt(3000))

        randomCat = cats[getRandomInt(3)-1]
        animation = 'cat'+getRandomInt(3)

        randomCat.classList.add(animation)
        await sleep(500)
        randomCat.classList.remove(animation)

        await sleep(100)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}