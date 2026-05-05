if (localStorage.getItem("username")) {
  window.location.href = "./feed.html";
}

async function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  const response = await fetch("/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  alert((await response.json()).message);
  window.location.href = "./signin.html";
}

async function signin() {
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;
  const response = await fetch("/api/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const result = await response.json();
  alert(result.message);

  if (response.status === 200) {
    localStorage.setItem("username", username);
    window.location.href = "./feed.html";
  }
}
