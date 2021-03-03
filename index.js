const figlet = require('figlet');

const input = process.argv.slice(2);

figlet(`${input}`, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});