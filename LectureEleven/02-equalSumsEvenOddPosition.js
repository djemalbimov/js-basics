function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = " ";

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenPosition = 0;
        let oddPosition = 0;

        let curNumAsStr = curNum.toString();

        for (let i = 0; i < curNumAsStr.length; i++) {
            let curDigit = Number(curNumAsStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenPosition += curDigit;
            } else {
                oddPosition += curDigit;
            }
        }
        if (evenPosition === oddPosition) {
            result += curNumAsStr + " ";
        }
    }
    console.log(result);

}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);