var request = require("request");

if(typeof process.argv[2] !== 'string' || !parseInt(process.argv[3])){
    console.log('invalid arguments');
    process.exit(1);
}

console.log('Will be sending first request in ' + (parseInt(process.argv[3]) / 1000) + ' seconds');

setInterval(function () {
    request(process.argv[2], function (error, response, body) {
        console.log(body);
    });
}, process.argv[3]);