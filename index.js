const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getPost() {
    fetch(`${apiUrl}/1`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}

function getPost() {
    fetch(`${apiUrl}/1`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}

function updatePost() {
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

function deletePost() {
    fetch(`${apiUrl}/1`, {
        method: 'DELETE',
    })
    .then(() => {
        document.getElementById('output').innerText = 'Post deleted';
    });
}
