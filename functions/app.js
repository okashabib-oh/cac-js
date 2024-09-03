function sumToN(n){
    let sum = 0;
    let count = 1;
    for(count; count <= n; count++){
        sum += count
    }
    console.log(sum)
}
// sumToN(5)

function sum(n){
    let sum = 0;
    let count = 1;
    while(count <= n){
        sum += count;
        count += 1
    }
    console.log(sum);
}

// sum(5)

function primeOrNot(n){
    for(let i = 2; i <= n-1; i++){
        if(n % i == 0){
            console.log("N is non-Prime number");
            break;
        }else{
            console.log("N prime number");
        }
    }
}
// prime(8)

// SI = P * R * T

function checkAgeForLiscence(age){
    if(age >= 18){
        console.log("You're eligible for liscence")
    }else{
        console.log("You aren't eligible for liscence");
        
    }
}

// function factorial(n){
//     let f = 1;
//     for(let i = 0; i <= n; i++){
//         f = i * f
//     }
//     console.log(f)
// }

// factorial(5)