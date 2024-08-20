const colors = document.querySelectorAll('.colors')

colors.forEach((c) => {
    c.addEventListener("click", (e) => {
        const element = e.target
        switch (element.id) {
            case "black":
                document.body.style.backgroundColor = element.id
                document.body.style.transition = "all 1s"
                document.body.style.color = "white"
                break;
            case "grey":
                document.body.style.backgroundColor = element.id
                document.body.style.transition = "all 1s"
                break;
            case "green":
                document.body.style.backgroundColor = element.id
                document.body.style.transition = "all 1s"
                break;
            case "white":
                document.body.style.backgroundColor = element.id
                document.body.style.transition = "all 1s"
                document.body.style.color = "black"
                break;
            case "aqua":
                document.body.style.backgroundColor = element.id
                document.body.style.transition = "all 1s"
                break;
        
            default:
                document.body.style.backgroundColor = "black"
                break;
        }
    })
})