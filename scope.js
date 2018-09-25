test1()
// test2()
// test3()

// console.log('@a-global', a)


// var
function test1() {
    var y = -1
    if (false) { //try true
        var y = 3
        var z = 1
        a = 2
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@a-test1', a)
    console.log('@y', y)
}


//const
function test2() {
    const y = -1
    if (false) { //try true
        const y = 3
        const z = 1
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@a-test2', a)
    console.log('@y', y)
}

// let
function test3() {
    let y = -1
    if (false) { //try true
        let y = 3
        let z = 1
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@a-test3', a)
    console.log('@y', y)
}