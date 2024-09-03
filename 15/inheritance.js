class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// const userLog = new User("okashabib-oh", "okasha@gp.co", "o!94gb%4")
// console.log(userLog)

class Info extends User {
    constructor(username, email, password, accountNum, maritalStatus, gender, address) {
        super(username, email, password);
        this.accountNum = accountNum;
        this.maritalStatus = maritalStatus;
        this.gender = gender;
        this.address = address;
    }

    validateInfo() {
        if (this.username.trim().length == 0 || this.email.trim().length == 0 || this.password.trim().length == 0 || this.accountNum.trim().length == 0 || this.maritalStatus.trim().length == 0 || this.gender.trim().length == 0 || this.address.trim().length == 0) {
            return "Please fill all the fields";
        }
        console.log(this.username.length, this.email, this.password, this.accountNum, this.maritalStatus, this.gender, this.address);
    }
}

// const userInfo = new Info("okashabib-oh", "okasha@gm.co", "p09%@!bd", "39631MbYYEie0329", "single", "male", "123 Street KHI")
// console.log(userInfo);
const userInfo1 = new Info("okasha", "okasha@gmail.com", " ", " ", " ", " ", " ");
console.log(userInfo1.validateInfo());