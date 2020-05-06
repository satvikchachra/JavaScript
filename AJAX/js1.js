const loadText = () => {
    console.log('button clicked');
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN - type, url/file, async or not
    xhr.open('GET', 'sample.txt', true);

    console.log(xhr.readyState); // 1

    // OPTIONAL - used for loaders
    xhr.onprogress = () => {
        console.log(xhr.readyState); // 3 4 
    };

    // onload doesn't run unless request is finished and response is ready

    xhr.onload = () => {
        console.log(xhr.readyState); // 4
        if (xhr.status == 200) {
            // console.log(xhr.responseText);
            document.querySelector('#text').innerHTML = xhr.responseText;
        } else if (xhr.status == 404) {
            document.querySelector('#text').innerHTML = "Not found";
        }
    };

    xhr.onerror = () => {
        console.log("request error...");
    };

    // Sends request
    xhr.send();

    // Old way

    // xhr.onreadystatechange = () => {
    //     console.log(xhr.readyState); // 2 3 4
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         // console.log(xhr.responseText);
    //     }
    // };

    // xhr.send();



};




// Add event listener
document.querySelector('#button').addEventListener('click', loadText);

