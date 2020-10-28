const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    let result = 0;
        matrix.forEach(array => {
            array.forEach(el => {
                if (el === '^^') {
                    result += 1;
                }
            })
       })
        return result;
}
