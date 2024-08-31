function generateOtp(){
    let nums = "0123456789"
    let otp = ""
    for(let i = 0; i<6; i++){
        let randomNums = nums[Math.floor(Math.random() * 10)];
        otp += randomNums;
    }
    return otp;
}

console.log(generateOtp());