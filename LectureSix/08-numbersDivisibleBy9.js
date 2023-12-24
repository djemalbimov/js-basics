function numbersDivisibleBy9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    
    let sum = 0;
    let outputNumber = "";

    for (let i = n; i < m; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            outputNumber = outputNumber + `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);

    console.log(outputNumber);
}

numbersDivisibleBy9(["100", "200"])