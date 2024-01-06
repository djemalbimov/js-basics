function minNumber(input) {
    let number = input[0];
    let i = 0;
    let minNumber = 99999999999;

    while (number !== "Stop") {
        let num = Number(number);

        if (num < minNumber) {
            minNumber = num;
        }
        i++;
        number = input[i];
    }
    console.log(minNumber);
}

minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"])
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);