function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let validCombination = 0;
    let isValid = false;


    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {

            let sum = i + j;
            validCombination++;

            if (sum === magic) {
                console.log(`Combination N:${validCombination} (${i} + ${j} = ${sum})`);
                isValid = true;
                break;
            }

        }
        if (isValid) {
            break;
        }

    }
    if (!isValid) {
        console.log(`${validCombination} combinations - neither equals ${magic}`);
    }

}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);