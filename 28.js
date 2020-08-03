function say() {
    console.log('hello world')
}

say()

;(function () {
    console.log('hello')
})()

;['apple','banana'].forEach(function () {
    console.log(arguments)
})

;`hello`.toString()
