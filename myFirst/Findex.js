// IIFE  way solves global name-space collisions
(function () {
    function module() {
    console.log("My first module");
    }
    return module();
})();


function myMultiplier(num) {
    return num * 2;
}
console.log(myMultiplier(2));


  
module.exports.myMultiplier=myMultiplier
console.log(module.exports);


