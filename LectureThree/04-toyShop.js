function toyShop(input) {

    let vacationPrize = Number(input[0]);
    let numberPuzzle = Number(input[1]);
    let numberDolls = Number(input[2]);
    let numberBears = Number(input[3]);
    let numberMinions = Number(input[4]);
    let numberTrucks = Number(input[5]);

    let puzzlePrize = numberPuzzle * 2.60;
    let dollsPrize = numberDolls * 3.00;
    let bearsPrize = numberBears * 4.10;
    let minionsPrize = numberMinions * 8.20;
    let trucksPrize = numberTrucks * 2.00;

    let totalPrize = puzzlePrize + dollsPrize + bearsPrize + minionsPrize + trucksPrize;
    let totalCount = numberPuzzle + numberDolls + numberBears + numberMinions + numberTrucks;

    if (totalCount >= 50) {
        totalPrize = totalPrize * 0.75;
    }

    totalPrize = totalPrize * 0.90;

    if (totalPrize >= vacationPrize) {
        leftMoney = totalPrize - vacationPrize;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)

    } else {
        let moneyNeeded = vacationPrize - totalPrize;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}

toyShop(["320", "8", "2", "5", "5", "1"]);
toyShop(["40.8", "20", "25", "30", "50", "10"]);


