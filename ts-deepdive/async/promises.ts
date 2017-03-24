const promise = new Promise((resolve, reject) => {
    setTimeout((x:number) => resolve(x), 2000)
})

promise.then((res) => {
    console.log('I get called:', res === 123); // I get called: true
})

Promise.resolve(123)
    .then((res) => {
        console.log(res); // 123
        return 456;
    })
    .then((res) => {
        console.log(res); // 456
        return Promise.resolve(true); // Notice that we are returning a Promise
    })
    .then((res) => {
        console.log(res); // 123 : Notice that this `then` is called with the resolved value
        return 123;
    })
    .catch((err) => {
        console.log(err.message)
    })

Promise.reject('always error')
    .then(x => {})
    .catch(x => {
        console.log(x)
        return 'then error'
    })
    .then(x => console.log(x))