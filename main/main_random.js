function random(count) {
    if  (count >= 5) {}
    let arr = [];
    while (arr.length < 4) {
        let result = Math.floor(Math.random() * 10);
        if (arr.indexOf(result) === -1) {
            arr.push(result);
        }
    }
    return arr.reduce((a, b) => a += b, "");
}

module.exports = random;