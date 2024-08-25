const pic1 = document.getElementById('photoshop')
const ul = document.getElementById('images')
pic1.addEventListener('click', (e)=>{
    pic1.src = "https://ca.slack-edge.com/T07EJC9H3CG-U07JH5ZNHK3-ef4c5c56137d-192"
    pic1.style.borderRadius = '50%';
})

ul.addEventListener("click", (e)=>{
    let imgRemove = e.target.tagName
    if(imgRemove === "IMG"){
        e.target.parentNode.remove()
    }
})

// bubbling event go from bottom to top => e.stopPropagation()

// capture event from top to bottom
