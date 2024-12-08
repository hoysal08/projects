const fs = require('fs');
const { exit } = require('process');


/// - - - - - > SYNC READ

// console.time();
// const fileData = fs.readFileSync('data.txt', 'utf-8');
// console.log(fileData)

// let i = 0;
// while (i < 1000000000){
//     i++;
// }

// console.timeEnd()


/// - - - - - > ASYNC READ

function successCallback(err, data) {
if(err){
    console.log(err)
    exit()
} else{
    console.log(data)
}
console.timeEnd()
}
console.time();
fs.readFile('data.txt', 'utf-8', successCallback)

let i = 0;
while (i < 1e7){
    i++;
}