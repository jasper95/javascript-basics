this.x = 'global x'
function Test() {
    this.x = 1
    function Inner1() {
        console.log(this.x)
    }
    const Inner2 = () => {
        console.log(this.x)
    }
    const Inner3 = () => {
        (function (){
            this.x = 3
        })()
    }
    return {
        Inner1: Inner1.bind(this),
        Inner2,
        Inner3
    }
}
const a = Test()
// a.Inner3()
// a.Inner2()
// a.Inner1()
const object = {
    x: 'Jasper',
    test1() {
        console.log('test1: this.x', this.x)
    },
    test2: () => {
        console.log('test2: this.x', this.x)
    }
}
console.log(object.test1())
console.log(object.test2())
console.log(this)
