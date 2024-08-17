//let arr = [21, 43, 13, 53, 12, 52, 23, 52]
//
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}
let matrix = [
    [21, 11, 22, 33],
    [21, 32],
    [21, 55, 15, 90, 78, 77, 21]
]
//console.log(matrix)
//console.log(matrix[0].length)
for (let i = 0; i < matrix.length; i++) {
    const outer = matrix[i];
    for (let j = 0; j < outer.length; j++) {
//        console.log(matrix[i][j] + matrix[i][j])
//        console.log(i, j)
//        break;
    }
}

for (let i = 1; i < 11; i++) {
    if (i == 6) {
        console.log(`Found 6`)
        break;  // break stops the entire loop 
    }
//    console.log(i)
}

for (let i = 1; i < 9; i++) {
    if (i == 4) {
        console.log(`${i} is skipped`);
        continue; // continue skips the specific condition iteration and continue the loop
    }
//    console.log(i);
}