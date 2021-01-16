const container = document.querySelector('.card');

container.addEventListener('click',rotate)

function rotate(){
    container.classList.toggle('rotated');
}