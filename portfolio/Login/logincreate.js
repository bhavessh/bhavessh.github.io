// logincreate.js
function toggleForm(formType) {
  const loginBox = document.getElementById("loginBox");
  const signupBox = document.getElementById("signupBox");

  if (formType === "signup") {
    loginBox.classList.add("hidden");
    signupBox.classList.remove("hidden");
  } else {
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
  }
}

function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  if (username && password) {
    alert(`Welcome back, ${username}!`);
  } else {
    alert("Please fill out both fields.");
  }
}

function signup() {
  const username = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPass").value;

  if (username && email && password) {
    alert(`Account created successfully for ${username}`);
    toggleForm("login");
  } else {
    alert("All fields are required to sign up.");
  }
}
