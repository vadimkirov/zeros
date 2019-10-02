module.exports = function zeros(expression) {
  // your solution
    let numberFromExpression = expression.split("*"), checkTwo = 0, checkFive = 0;
    numberFromExpression.forEach(item => {
        let degreeFactorial;
        let itselfNumber;

        if (item.slice(-2) === '!!') {
            degreeFactorial = 2;
            itselfNumber = +item.slice(0, -2);
        } else {
            degreeFactorial = 1;
            itselfNumber = +item.slice(0, -1);
        }
        for(; 0 < itselfNumber ; itselfNumber -= degreeFactorial) {

            let temp = itselfNumber;
            while (temp % 5 === 0) {
                checkFive++;
                temp = temp/5;
            }
            temp = itselfNumber;
            while (temp % 2 === 0) {
                checkTwo++;
                temp = temp/2;
            }
        }
    });
    return Math.min(checkTwo, checkFive);
}
