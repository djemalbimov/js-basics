function sumNumbers(input) {
    let goal = Number(input[0]);
    let sum = 0;
    let i = 1;
    let currentNumber = Number(input[i]);

    while (sum < goal) {
        sum += currentNumber;
        i++;
        currentNumber = Number(input[i]);

    }
    console.log(sum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
sumNumbers(["100", "10", "20", "30", "40"]);