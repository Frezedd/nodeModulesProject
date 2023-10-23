const fileSystem = require("fs");
// console.log(fileSystem);
const F = require("../myFirst/Findex");
const S = require("../mySecond/Sindex");

console.log(F.myMultiplier(5));
console.log(S.myMultiplier(5));



const result= F.myMultiplier(14);

const fs = require("fs");
fs.writeFile(
    "results.txt",
    `The value of 14 when passed throught the myMultiplier function is(${result})`,
     (err) => {
        if (err) throw err;
        console.log(("saved!"));
    }
);

const result2= S.myMultiplier(14);

fs.appendFile(
    "results.txt",`The value of 14 when passed through the myMultiplier function is (${result2})`, function(err) {
        if (err)throw err;
        console.log("Saved!");
    }
)

// const rets = s.myMultiplier(14);
// fs.appendFile(
//     "results.txt",
//     `The value of 14 when passed throught the myMultiplier function is(${rets})`,
//     function (err) {
//         if (err) throw err;
//         console.log(("saved!"));
//     }
// )

