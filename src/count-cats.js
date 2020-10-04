const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
        const newMatrix = matrix.flat();
        let result = 0;
        newMatrix.forEach(el => {
               if (el === '^^') {
                       result += 1;
               }
       })
        return result;
}
