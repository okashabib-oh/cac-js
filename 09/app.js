const start = document.getElementById("start");
const stop = document.getElementById("stop");

function startChange(){
    const colorsNum = "0123456789ABCDEF"
    let hex = "#"
    for(let i = 0; i < 6; i++){
        hex += Math.floor(Math.random()*10)
    }
    document.body.style.backgroundColor = hex
}
let interv;
let startRef = start.addEventListener("click",() => {
    interv = setInterval(startChange, 1000)
})

stop.addEventListener("click",() => {
    clearInterval(interv)
})