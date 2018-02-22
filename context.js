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
a.Inner3()
a.Inner2()
a.Inner1()
