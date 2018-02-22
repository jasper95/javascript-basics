// var
function test1() {
    var y = -1
    if (false) {
        var y = 3
        var z = 1
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@y', y)
}
// test1()

//const
function test2() {
    const y = -1
    if (true) {
        const y = 3
        const z = 1
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@y', y)
}
// test2()

// let
function test3() {
    let y = -1
    if (true) {
        let y = 3
        let z = 1
    } else {
        y = 2
        console.log('@z', z)
    }
    console.log('@y', y)
}

// test3()