function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyHave = Number(input[1]);

    let index = 2;

    let daySpend = 0;
    let totalDays = 0;

    while (moneyHave < moneyNeeded) {
        let action = input[index];
        index++;

        let sum = Number(input[index]);
        index++;

        if (action === "save") {
            moneyHave += sum;
            daySpend = 0;
        } else if (action === "spend") {
            if (sum > moneyHave) {
                moneyHave = 0;
            } else {
                moneyHave -= sum;
            }
            daySpend++;
        }

        totalDays++;

        if (daySpend === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }
    }
    if (moneyHave >= moneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);