function shopping(input) {

    let budget = Number(input[0]);
    let countOfVideoCards = Number(input[1]);
    let countOfProcessors = Number(input[2]);
    let countRamStorage = Number(input[3]);

    let totalVideoCardPrize = countOfVideoCards * 250;
    let totalProcessorPrize = (totalVideoCardPrize * 0.35) * countOfProcessors;
    let totalRamStoragePrize = (totalVideoCardPrize * 0.10) * countRamStorage;

    let totalSumForMaterials = totalVideoCardPrize + totalProcessorPrize + totalRamStoragePrize;

    if (countOfVideoCards > countOfProcessors) {
        totalSumForMaterials = totalSumForMaterials * 0.85;
    }

    if (budget >= totalSumForMaterials) {
        budgetLeft = budget - totalSumForMaterials;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`)

    } else if (budget < totalSumForMaterials) {
        sumNeed = totalSumForMaterials - budget;
        console.log(`Not enough money! You need ${sumNeed.toFixed(2)} leva more!`)
    }


}

shopping(["920.45", "3", "1", "1"]);
shopping(["900", "2", "1", "3"]);


