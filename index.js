let section = document.querySelector('.section');
let comments = document.querySelector('.comments');

document.querySelector('.feedback').addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("Formulário enviado sem recarregar a página!");
  });

function showMessage() {
    let feedbackName = document.querySelector('.name');
    let nameValue = feedbackName.value;

    let feedbackMessage = document.querySelector('.message');
    let messageValue = feedbackMessage.value;

    let nameElement = document.createElement('h2');
    let messageElement = document.createElement('p');

    nameElement.innerText = nameValue;
    messageElement.innerText = messageValue;

    let div = document.createElement('div');

    div.append(nameElement);
    div.append(messageElement);

    div.classList.add('comment');

    comments.append(div);
}

let button = document.querySelector('.button');
button.addEventListener('click', () => {
    showMessage();
});