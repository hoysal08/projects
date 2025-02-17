const express = require("express");

const app = express();
let REQ_COUNT = 0;
const accountRequest = (req, res, next) => {
    REQ_COUNT++;
    console.log("Request received ", REQ_COUNT);

    // Use res.locals to store temporary data
    res.locals.REQ_COUNT = REQ_COUNT;

    next();
};

app.get("/", function(req, res){
    res.json("Hello World")
})
app.get("/sum", accountRequest,function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
        REQ_COUNT: res.locals.REQ_COUNT
    })
});

app.get("/multiply",accountRequest, function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b,
        REQ_COUNT: res.locals.REQ_COUNT
    })
});

app.get("/divide",accountRequest, function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b,
        REQ_COUNT: res.locals.REQ_COUNT
    })

});

app.get("/subtract",accountRequest, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b,
        REQ_COUNT: res.locals.REQ_COUNT
    })
});
const port = 3001

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));
