const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (message) => {
  console.log('Chat message received => ', message);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  messages.appendChild(li);
});
