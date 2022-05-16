const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(JSON.parse(data).version);
});