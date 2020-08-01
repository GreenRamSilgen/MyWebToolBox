/**
 * IMAGES:
 * https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/cd/fcd39320-614c-11ea-88d5-ab37e1c7ff72/5e652cc38d58d.preview.jpg?resize=630%2C630https://bloximages.chicago2.vip.townnews.com/iowastatedaily.com/content/tncms/assets/v3/editorial/f/cd/fcd39320-614c-11ea-88d5-ab37e1c7ff72/5e652cc38d58d.preview.jpg?resize=630%2C630
 * https://ibighit.com/bts/images/bts/discography/love_yourself-her/album-cover.jpg
 * https://media.pitchfork.com/photos/5ee25be2ca5f171c3b76fb77/master/w_1600%2Cc_limit/BTS.jpg
 * https://www.hypable.com/wp-content/uploads/2019/03/skool-luv-affair-special-addition.jpg
 */

const leftBtn = document.querySelector('.imgCarousel__leftBtn');

leftBtn.addEventListener('click', moveCarousel);

function moveCarousel() {

    const content = document.querySelector('.imgCarousel__container');
    if(content.style.transform){
        console.log("has transform");
        console.log(content.style.transform);
        let num = content.style.transform;
        console.log();
        content.style.transform = `translateX(-${Number(num.substr(12,3)) + 100}vw)`;
    }
    else{
    content.style.translate = 'transform 1s ease-out';
    content.style.transform = 'translateX(-100vw)';
    }
    // if (content.classList.contains('slideLeft')) {
    //     content.classList.remove('slideLeft');
    //     //console.log("YO");
    //     //setTimeout(content.classList.add('slideLeft'),300);
        
    // } else {
    //     content.classList.add('slideLeft');
    // }
}