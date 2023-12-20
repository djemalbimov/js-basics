function newHouse(input) {
    let flowersType = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrize = 0;

    if (flowersType === "Roses") {
        if (numberOfFlowers > 80) {
            totalPrize = numberOfFlowers * 5 * 0.90;
        } else {
            totalPrize = numberOfFlowers * 5;
        }

    } else if (flowersType === "Dahlias") {
        if (numberOfFlowers > 90) {
            totalPrize = numberOfFlowers * 3.80 * 0.85;
        } else {
            totalPrize = numberOfFlowers * 3.80;
        }

    } else if (flowersType === "Tulips") {
        if (numberOfFlowers > 80) {
            totalPrize = numberOfFlowers * 2.80 * 0.85;
        } else {
            totalPrize = numberOfFlowers * 2.80;
        }

    } else if (flowersType === "Narcissus") {
        if (numberOfFlowers < 120) {
            totalPrize = (numberOfFlowers * 3.00 * 1.15);
        } else {
            totalPrize = numberOfFlowers * 3.00;
        }

    } else if (flowersType === "Gladiolus") {
        if (numberOfFlowers < 80) {
            totalPrize = (numberOfFlowers * 2.50 * 1.20);
        } else {
            totalPrize = numberOfFlowers * 2.50;
        }

    } if (totalPrize <= budget) {
        let moneyLeft = budget - totalPrize;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (totalPrize > budget) {
        let moneyNeeded = totalPrize - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"]);
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);