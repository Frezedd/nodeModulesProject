function myMultiplier(num) {
    return num * 3;
}
console.log(myMultiplier(4));


module.exports.myMultiplier=myMultiplier
console.log(module.exports);