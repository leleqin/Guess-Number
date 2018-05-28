function main(input,result) {

    let inputArray = input.split("");
    let resultArray = result.split("");
    let resultObj = {'A': 0, 'B': 0};
    inputArray.map((item, indexItem) => {
        resultArray.map((elem, indexElem) => {
            if (item === elem && indexElem === indexItem) {
                resultObj['A']++;
            } else if (item === elem && indexElem !== indexItem) {
                resultObj['B']++;
            }
        })
    })

    return `${resultObj.A}A${resultObj.B}B`;
};

module.exports = main