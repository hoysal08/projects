let stateValue = 0;
const increment = () => {
    stateValue = stateValue + 1;
    console.log("Value is ", stateValue);
}
setInterval(increment, 1000);
