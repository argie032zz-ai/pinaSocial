async function createPost() {
  const textarea = document.getElementById("post-content");
  const content = textarea.value;
  const username = localStorage.getItem("username");

  if (!content.trim()) {
    alert("Post content cannot be empty!");
    return;
  }

  const response = await fetch("/api/posts/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, content }),
  });

  alert((await response.json()).message);

  textarea.value = "";

  fetchPosts();
}

async function fetchPosts() {
  const response = await fetch("/api/posts/");
  const posts = await response.json();

  document.getElementById("post-list").innerHTML = posts
    .reverse()
    .map(
      (post) =>
        `
            <div class="post-card">
                <div class="post-header">
                    <b>${post.username}</b>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
                <div class="post-date">
                    ${new Date(post.createdAt).toLocaleString()}
                </div>
            </div>
        `,
    )
    .join("");
}

fetchPosts("");
