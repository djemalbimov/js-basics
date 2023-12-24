function numbersWithSteps(input) {
    let number = Number(input[0]);

    for (let i = 1; i <= number; i += 3) {
        console.log(i);
    }
}

numbersWithSteps(["10"]);
numbersWithSteps(["7"]);
numbersWithSteps(["15"]);