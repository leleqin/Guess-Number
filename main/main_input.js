let readline = require('readline');
let main = require('./main')
let random = require('./main_random')

//创建readline接口实例
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = random();
let count = 0;
rl.on('line', function (line) {
    if (count >= 5) {
        result = random()
    }
    console.log(main(line, result));
    count++;
})