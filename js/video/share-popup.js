const sharePopUp = document.querySelector('.share-popup');
const shareCloseButton = document.querySelector('.share-close-btn');
const shareButton = document.querySelector('.share button');

shareCloseButton.addEventListener('click', () => {
  sharePopUp.style.display = 'none';
});

shareButton.addEventListener('click', () => {
  sharePopUp.style.display = 'block';
});
