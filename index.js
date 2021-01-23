const container = document.querySelector('.card');

container.addEventListener('click',rotate)

function rotate(event){
    container.classList.toggle('move');
    event.addEventListener('transitionend',() =>{
        container.classList.toggle('rotate');
    })
}