const apiUrl = "https://jsonplaceholder.typicode.com/posts";


function fetchPosts() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById("posts-container");
            postsContainer.innerHTML = "";

            data.slice(0, 5).forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");

                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button class="update-btn" data-id="${post.id}">Update</button>
                    <button class="delete-btn" data-id="${post.id}">Delete</button>
                `;

                postsContainer.appendChild(postDiv);
            });

           
            document.querySelectorAll(".update-btn").forEach(btn => {
                btn.addEventListener("click", function () {
                    const postId = this.getAttribute("data-id");
                    updatePost(postId, this);
                });
            });

            document.querySelectorAll(".delete-btn").forEach(btn => {
                btn.addEventListener("click", function () {
                    const postId = this.getAttribute("data-id");
                    deletePost(postId, this);
                });
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
}


function updatePost(id, btn) {
    fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id,
            title: "Updated User",
            body: "This User is ready to deliver!",
            userId: 1
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Update response:", data); 
        alert(`Post ${id} updated!`);

 
        const postDiv = btn.parentElement;
        postDiv.querySelector("h3").innerText = "Updated User";
        postDiv.querySelector("p").innerText = "This User has been updated successfully!";
    })
    .catch(error => console.error("Error updating post:", error));
}

function deletePost(id, btn) {
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            console.log(`Post ${id} deleted successfully.`);
            alert(`Post ${id} deleted!`);
            btn.parentElement.remove();
        } else {
            console.error("Failed to delete user.");
        }
    })
    .catch(error => console.error("Error deleting post:", error));
}


window.onload = fetchPosts;
