const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string은 대문자로
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}