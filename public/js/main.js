const button = document.querySelector('.content-chat form div');
const input = document.querySelector('#input-value');
const chatText = document.querySelector('.chat-text');

const createElement = (data) => {
  const text = document.createElement('p');
  text.textContent = data;
  chatText.appendChild(text);
};
button.addEventListener('click', () => {
  chatText.textContent = '';
  fetch(`/data/${input.value}`)
    .then((res) => res.json())
    .then((data) => createElement(data.text))
    .catch((error) => console.error(error));
  input.value = '';
});
