export class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    crateUserId(){
        const id = Math.floor(Math.random() * 1000000)
        return `${this.username}_${id}`
    }
}

const user = new User("okashabib-oh", "okasha@g.co", "o@1-9%3vc")
// console.log(user.crateUserId());