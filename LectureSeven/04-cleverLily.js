function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrize = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 !== 0) {
            moneySaved += toyPrize;
        } else {
            moneySaved += (moneyGiven - 1);
            moneyGiven += 10;
        }

    }

    if (moneySaved >= washingMachine) {
        let moneyLeft = moneySaved - washingMachine;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else if (moneySaved < washingMachine) {
        let moneyNeeded = washingMachine - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)} `);
    }

}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);