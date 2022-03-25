function notify(message) {

  let divNotificationElement = document.querySelector('#notification');
  divNotificationElement.textContent = message;
  divNotificationElement.style.display = 'block';

  divNotificationElement.addEventListener('click', (e) => {
    divNotificationElement.setAttribute('style', 'display: none');
  });
}
