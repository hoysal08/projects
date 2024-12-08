class Promise2 {
    constructor(fn){
        const afterDone = () => this.resolve()
        fn(afterDone)
    }
    then(cb) {
     this.resolve = cb
    }
}


function wait1(t) {
    return new Promise2((resolve) => {
        setTimeout(() => resolve(t), t);
    });
}

async function calculateTime(t1) {
    const st = Date.now();
    await wait1(t1);
    const et = Date.now()
    const diff = et - st;
    return diff
}

async function main() {
    const res = await calculateTime(1000)
    console.log(res)
}

main()