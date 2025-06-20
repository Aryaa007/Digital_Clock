function updateClock(){
    const clock=document.getElementById('clock')
let date= new Date();
const time=date.toLocaleTimeString();
clock.textContent=time;
}

setInterval(updateClock, 1000);
updateClock();
