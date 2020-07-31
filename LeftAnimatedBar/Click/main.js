const sideModalBtn = document.querySelector('.sideModalBtn');
const sideModalBack = document.querySelector('.sideModalBack');
const sideModal = document.querySelector('.sideModal');


sideModalBtn.addEventListener('click',slideOut);
sideModalBack.addEventListener('click', slideIn);


function slideOut(){
    sideModalBack.style.display = 'block';

    setTimeout(function(){
        sideModal.classList.remove('slideInAnim');
        sideModal.classList.add('slideOutAnim');
    },0001);
}
function slideIn(){
    toggleSideModal();
    setTimeout(function(){
    sideModalBack.style.display = 'none';
    }, 200);
}
function toggleSideModal(){
    setTimeout(function(){
        sideModal.classList.remove('slideOutAnim');
        sideModal.classList.add('slideInAnim');
    },0001);
}
