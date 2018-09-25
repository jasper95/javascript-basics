var a = 2
b = 1

function f(z) {
    b = 3
    c = 4
    var d= 6

    function g() {
        var e = 0 
        d = 3*d
        return d      
    }

    return g()
    var e
}

f(1)
// var myG = f(1)
// myG()