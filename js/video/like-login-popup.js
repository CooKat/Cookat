const loginPopUp = document.querySelector('.like-login-popup');
const loginCloseButton = document.querySelector('.login-close-btn');
const likeButton = document.querySelector('.like');
const cancelButton = document.querySelector('.cancel-btn');

loginCloseButton.addEventListener('click', () => {
  loginPopUp.style.display = 'none';
});
cancelButton.addEventListener('click', () => {
  loginPopUp.style.display = 'none';
});

likeButton.addEventListener('click', () => {
  loginPopUp.style.display = 'block';
});
