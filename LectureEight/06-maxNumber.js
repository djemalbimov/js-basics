function maxNumber(input) {
    let number = input[0];
    let i = 0;
    let maxNumber = -99999999999999;

    while (number !== "Stop") {
        let num = Number(number);

        if (num > maxNumber) {
            maxNumber = num;
        }
        i++;
        number = input[i];
    }
    console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);