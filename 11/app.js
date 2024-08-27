const input = document.getElementById("username")
const form = document.getElementById('form')
let usernameErr = document.getElementById('usernameErr')
let name = document.getElementById('name')
let nameIn = document.getElementById('name-in')
let image = document.getElementById('image')
let followers = document.getElementById('followers')
let usernameCard = document.getElementById('email')
const card = document.getElementById('card')

form.addEventListener("submit", (e) => {
    card.classList.add("hidden")
    e.preventDefault()
    const username = input.value
    if(!username.trim()){
        usernameErr.classList.remove('hidden')
        input.classList.add('border-red-600')
        usernameErr.textContent = "Please enter username"
        return
    }
    usernameErr.textContent = ""
    usernameErr.classList.add('hidden')
    input.classList.remove('border-red-600')

    const xhr = new XMLHttpRequest();
    const reqUrl = `https://api.github.com/users/${username}`
    xhr.open('GET', reqUrl)
    xhr.onreadystatechange = function(){
        console.log(this.status);
        console.log(this.readyState);
        if(xhr.readyState === 4 && this.status === 200){
            console.log(JSON.parse(this.responseText))
            const data = JSON.parse(this.responseText)

            image.src = data.avatar_url
            name.textContent = data.name
            nameIn.textContent = data.name
            image.alt = `Avatar of ${data.name}`
            image.title = data.name
            followers.textContent = `Followers: ${data.followers}`
            usernameCard.textContent = `@${data.login}`
            card.classList.remove("hidden")
        }
    }
    xhr.send()
})