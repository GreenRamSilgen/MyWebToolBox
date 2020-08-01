/**
 * IMAGES:
 * https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/cd/fcd39320-614c-11ea-88d5-ab37e1c7ff72/5e652cc38d58d.preview.jpg?resize=630%2C630https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/cd/fcd39320-614c-11ea-88d5-ab37e1c7ff72/5e652cc38d58d.preview.jpg?resize=630%2C630
 * https://ibighit.com/bts/images/bts/discography/love_yourself-her/album-cover.jpg
 * https://media.pitchfork.com/photos/5ee25be2ca5f171c3b76fb77/master/w_1600%2Cc_limit/BTS.jpg
 * https://www.hypable.com/wp-content/uploads/2019/03/skool-luv-affair-special-addition.jpg
 */
let panelNum = 0;

const leftBtn = document.querySelector('.imgCarousel__leftBtn');
const rightBtn = document.querySelector('.imgCarousel__rightBtn');
const content = document.querySelector('.imgCarousel__container');

leftBtn.addEventListener('click', moveCarouselLeft);
rightBtn.addEventListener('click', moveCarouselRight);

function moveCarouselLeft() {
    if (content.style.transform) {
        if (panelNum < 2) { //change this to stop left button functionality timing
            let num = extractNum(content.style.transform);
            content.style.transform = translateCalc(num, -100);
            panelNum++;
            console.log(panelNum);
        }
    } else {

        content.style.transform = 'translateX(-100vw)';
        
        panelNum++;
    }
}

function moveCarouselRight() {
    if (panelNum > 0) {
        let num = extractNum(content.style.transform)
        content.style.transform = translateCalc(num, 100);
        panelNum--;
    }
}

function translateCalc(originalValue, moveAmt) {
    return `translateX(${originalValue+moveAmt}vw)`;
}

function extractNum(word){
    let backWord = word.substr(11);
    return Number(backWord.split('v')[0]);
}