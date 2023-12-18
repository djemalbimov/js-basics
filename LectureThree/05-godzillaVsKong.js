function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPerExtras = Number(input[2]);

    let decorPrize = budget * 0.10;
    let clothingPrize = extras * clothingPerExtras;

    if (extras >= 150) {
        clothingPrize = clothingPrize * 0.90;
    }
    totalPrize = clothingPrize + decorPrize;

    if (totalPrize > budget) {
        moneyNeeded = totalPrize - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)

    } else if (totalPrize <= budget) {
        moneyLeft = budget - totalPrize;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)

    }

}

godzillaVsKong(["9587.88", "222", "55.68"]);
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);



