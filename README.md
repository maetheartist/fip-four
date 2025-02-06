# fip-four
A simple task to demo how API requests work in JavaScript.
using api requests to download mock data from apiUrl = 'https://jsonplaceholder.typicode.com/posts'
GET = function getPost() {
    fetch(`${apiUrl}/1`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}

POST = function getPost() {
    fetch(`${apiUrl}/1`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}

PUT = function updatePost() {
    fetch(`${apiUrl}/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ 
            id: 1,
            title: "User",
            body: 'This user is diligent and hardworking',
            userId: 1,
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    });
}
DELETE = function deletePost() {
    fetch(`${apiUrl}/1`, {
        method: 'DELETE',
    })
    .then(() => {
        document.getElementById('output').innerText = 'Post deleted';
    });
}
