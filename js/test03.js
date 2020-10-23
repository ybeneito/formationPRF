{
    var i = 12; // function scope
}
console.log(i); // ok 

{
    let j = 45; // block scope
}
// console.log(j); // pas ok

function test() {
    var k = 42;
    {
        var l = "hello" // block scope
    }
    console.log(k);
    console.log(l);
}

test();