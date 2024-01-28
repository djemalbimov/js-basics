function specialNumbers(input) {

    let n = Number(input[0]);
    let result = " ";

    for (let curNum = 1111; curNum <= 9999; curNum++) {
        let isSpecial = true;

        let curNumAsStr = curNum.toString();

        for (let i = 0; i < curNumAsStr.length; i++) {
            let curDigit = Number(curNumAsStr[i]);

            if (n % curDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial === true) {
            result += curNum + " ";
        }
    }
    console.log(result);

}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);