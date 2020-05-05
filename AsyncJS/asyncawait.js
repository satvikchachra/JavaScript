const posts = [
    { title: 'Post1', body: 'This is post 1' },
    { title: 'Post2', body: 'This is post 2' }
];

const getPosts = () => {
    let output = '';
    setTimeout((resolve, reject) => {
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 2000);
};

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error msg: Something went wrong');
            }
        }, 2000);

    });
};

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'byee');
// });


// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json());


// Async / Await

// async function init(){
//     await createPost({ title: 'Post3', body: 'This is post 3' });

//     getPosts();
// }

// init();


async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));


// createPost({ title: 'Post3', body: 'This is post 3' })
//     .then(getPosts)
//     .catch((err) => {
//         console.log(err)
//     });