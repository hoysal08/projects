/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Done"), n);
    });
}

wait(2000).then(res => console.log("then resolved", res));
console.log("I am called before wait 🤯")

