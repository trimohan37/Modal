const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const show = document.querySelector('.show-modal') ;
const close = document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
show.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
