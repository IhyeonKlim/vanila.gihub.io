const clock = document.querySelector("#clock");
const dateArea = document.querySelector("#date");

function getClock(){
    const date = new Date();
    // let seconds ="";
    // if(date.getSeconds < 10){
    //     seconds = `0${date.getSeconds()}`
    // }else{
    //     seconds = date.getSeconds();
    // }
    // "1".padStart(2,"0") >>'01'
    // cf "1".padEnd(2,"0") >>'10'
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    dateArea.innerText = `${month} ${day} ${year}`;
    const hour =    String(date.getHours()).padStart(2,"0");
    const minute =  String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour} : ${minute} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);
