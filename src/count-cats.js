const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    throw new CustomError('Not implemented');
        const newMatrix = matrix.flat();
        let result = 0;
        newMatrix.forEach(el => {
               if (el === '^^') {
                       result += 1;
               }
       })
        return result;
}
