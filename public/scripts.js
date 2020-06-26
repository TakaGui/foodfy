const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function() {
    const imageId = card.getAttribute('id');
    const title = card.querySelector('.card__title').innerHTML;
    const owner = card.querySelector('.card__owner').innerHTML;

    modalOverlay.classList.add('active');

    modalOverlay.querySelector('img').src = `/assets/${imageId}.png`;
    modalOverlay.querySelector('.modal-title').innerHTML = `${title}`;
    modalOverlay.querySelector('.modal-owner').innerHTML = `${owner}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active');

  modalOverlay.querySelector('img').src = '';
  modalOverlay.querySelector('.modal-title').innerHTML = '';
  modalOverlay.querySelector('.modal-owner').innerHTML = '';
})