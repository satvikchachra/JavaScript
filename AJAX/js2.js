const loadUser = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'user.json', true);

    xhr.onload = () => {
        if (xhr.status == 200) {
            // store the data as an object 
            const data = JSON.parse(xhr.responseText);
            const userId = data.id;
            const userName = data.name;
            const userEmail = data.email;
            const output = `
            <ul>
            <li>ID : ${userId}</li>
            <li>Name : ${userName}</li>
            <li>Email : ${userEmail}</li>
            </ul>
            `;
            document.querySelector('#user').innerHTML = output;
        }
    };

    xhr.onerror = () => {
        console.log('Request error');
    };

    xhr.send();

};

const loadUsers = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json', true);

    xhr.onload = () => {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);
            let output = ``;
            data.forEach(element => {
                output += `<ul>
                <li>ID : ${element.id}</li>
                <li>Name : ${element.name}</li>
                <li>Email : ${element.email}</li>
                </ul>`;
            });
            document.querySelector('#users').innerHTML = output;
        }
    };

    xhr.onerror = () => {
        document.querySelector('#users').innerHTML = "Request Error";
    }

    xhr.send();

};

document.querySelector('#button1').addEventListener('click', loadUser);
document.querySelector('#button2').addEventListener('click', loadUsers);
