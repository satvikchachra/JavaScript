const posts = [
    { title: 'Post1', body: 'This is post 1' },
    { title: 'Post2', body: 'This is post 2' }
];

const getPosts = () => {
    let output = '';

    setTimeout(() => {
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);

};

// Success -> Resolve
// Error -> Reject

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Error Message: Something went wrong...');
            }
        }, 2000);
    });

};

// createPost({ title: 'Post3', body: 'This is post 3' })
//     .then(getPosts)
//     .catch(err => console.log(err));

const promise1 = Promise.resolve('Hello world!');
const promise2 = 20;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));

