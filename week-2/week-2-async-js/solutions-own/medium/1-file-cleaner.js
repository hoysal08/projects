const fs = require('fs');
const processIP = (data) => {
    const dataArray = data.split(" ")
    let output = "";
    dataArray.forEach(ele => {
        if (ele) {
            output = output + `${ele} `
        }
    })
    console.log(output)
}
const betterProcessIp = (data) => {
    const cleanedContent = data.replace(/\s+/g, ' ').trim();
    console.log(cleanedContent)
}
function successCallback(err, data) {
    if (err) {
        console.log(err)
        exit()
    } else {
        console.log(data)
        // processIP(data)
        betterProcessIp(data)
    }
    console.timeEnd()
}
console.time();
fs.readFile('data.txt', 'utf-8', successCallback)