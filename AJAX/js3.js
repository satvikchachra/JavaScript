const loadUsers = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);


    xhr.onload = () => {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);
            let output = ``;
            data.forEach((element) => {
                output += `
                <div class='usersClass'>
                    <img src=${element.avatar_url} width='70' height='70'>
                    <ul>
                        <li>${element.id}</li>
                        <li>${element.login}</li>
                    </ul>
                </div>`;
            });

            // console.log();
            document.querySelector('#users').innerHTML = output;
        }
    };

    xhr.onerror = () => {
        document.querySelector('#users').innerHTML = "Request Error";
    };

    xhr.send();
};

document.querySelector('#button').addEventListener('click', loadUsers);