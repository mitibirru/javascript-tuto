// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const greet = function (user, firstName = "", lastName = "") {
    if (user === 1) {
        console.log(`Thank you ${firstName} ${lastName} for your validation`);
    } else if (user === 2) {
        console.log(
            `Thank you ${firstName} ${lastName} for keeping the network secure`
        );
    } else if (user === 3) {
        console.log(
            `Thank you ${firstName} ${lastName} for using the platform`
        );
    }
};
