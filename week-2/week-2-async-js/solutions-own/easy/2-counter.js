let stateValue = 0;
const incrementAndSetTimeout = () => {
    stateValue = stateValue + 1;
    console.log("Value is ", stateValue);
    setTimeout(incrementAndSetTimeout, 1000)
}
setTimeout(incrementAndSetTimeout, 1000);
