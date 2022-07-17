const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-input")
const greeting = document.querySelector("#greeting")
const knowing = document.querySelector("#knowing")
const USERNAME_KEY = "username"
let username;
const HIDDEN_CLASSNAME = "hidden"


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginBtnClicked);
}else{
    knowing.classList.add(HIDDEN_CLASSNAME)
    paintGreetings()
}
function onLoginBtnClicked(event) {
    event.preventDefault();
    username = loginInput.value
    alert(username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
