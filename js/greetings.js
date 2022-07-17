const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-input")
const greeting = document.querySelector("#greeting")
const knowing = document.querySelector("#knowing")
const todoInput = document.querySelector("#toDoInput")
const USERNAME_KEY = "username"
let username;
const HIDDEN_CLASSNAME = "hidden"


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginBtnClicked);
}else{
    paintGreetings()
}
function onLoginBtnClicked(event) {
    event.preventDefault();
    username = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()
}

function paintGreetings(){
    todoInput.classList.remove(HIDDEN_CLASSNAME)
    knowing.classList.add(HIDDEN_CLASSNAME)
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요 ${username}님 !`;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
