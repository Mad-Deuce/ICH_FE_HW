const btnModalOpen = document.querySelector('.btn-modal-open');
const btnModalClose = document.querySelector('.btn-modal-close');
const modal = document.querySelector('.modal');

btnModalOpen.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.toggle('modal--hidden');
});
btnModalClose.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.toggle('modal--hidden');
});

modal.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === modal) {
        modal.classList.toggle('modal--hidden');
    };
})