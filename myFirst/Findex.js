// IIFE  way solves global name-space collisions
(function () {
    function module() {
    console.log("My first module");
    }
    return module();
})();

function sum(a, b) {
    let c;
    c = a + b;
    console.log(c);
}
console.log(sum(9, 10));