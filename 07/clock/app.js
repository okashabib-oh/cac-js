const clock = document.getElementById("clock")
setInterval(() => {
    const time = new Date()
    clock.innerText = time.toLocaleTimeString()
}, 1000)