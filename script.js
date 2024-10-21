const redSignal = document.getElementById('red');
const yellowSignal = document.getElementById('yellow');
const greenSignal = document.getElementById('green');
const message = document.getElementById('message');

function showMessage(color) {
    switch(color) {
        case 'red':
            message.innerHTML = "Stop! ";
            message.style.color = "red"; 
            break;
        case 'yellow':
            message.innerHTML = "Get ready!";
            message.style.color= "yellow"
            break;
        case 'green':
            message.innerHTML = "Move On";
            message.style.color = "green"
            break;
        default:
            message.innerHTML = "";
    }
}

redSignal.addEventListener('click', () => showMessage('red'));
yellowSignal.addEventListener('click', () => showMessage('yellow'));
greenSignal.addEventListener('click', () => showMessage('green'));