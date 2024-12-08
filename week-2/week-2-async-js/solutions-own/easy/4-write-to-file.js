const fs = require('fs');

function capitaliseAndWrite(data){
    console.log("called")
    if(data){
        const capData = data.toUpperCase()
        console.log("writing back ", capData);
        fs.writeFile('data-op.txt', capData, () => {})
    }
}
function successCallback(err, data) {
    if (err) {
        console.log(err)
        exit()
    } else {
        console.log(data)
        capitaliseAndWrite(data)
    }
    console.timeEnd()
}
console.time();
fs.readFile('data.txt', 'utf-8', successCallback)
