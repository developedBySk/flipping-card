const container = document.querySelector('.card');

container.addEventListener('click',move)
container.addEventListener('click',() => {
    container.classList.toggle('rotated');
})
container.addEventListener('transitionend',() => {
    container.classList.toggle('rotate');
})

function move(){
    container.classList.toggle('move');
    
}