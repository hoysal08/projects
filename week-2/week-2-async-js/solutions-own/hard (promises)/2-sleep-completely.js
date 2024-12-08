/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now()
        while(startTime + milliseconds > Date.now());
        resolve("Done");
    })
}

sleep(5000).then(res => console.log("then resolved", res));
console.log("I am called after wait 😭")