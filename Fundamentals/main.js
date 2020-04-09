//DOM elements and variables
let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();


    if (nameInput.value === '' || emailInput.value === '') {
        // window.alert("Please enter all fields");
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        //Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);

    } else {
        //create new list element for user
        let li = document.createElement('li');

        //append text node to li
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        //append li to ul
        userList.appendChild(li);

        //clear fields afterwards
        nameInput.value = '';
        emailInput.value = '';

    }
}