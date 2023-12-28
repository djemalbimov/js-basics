function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);

    let shipRent = 0;

    switch (season) {
        case "Spring": shipRent = 3000; break;
        case "Summer": shipRent = 4200; break;
        case "Autumn": shipRent = 4200; break;
        case "Winter": shipRent = 2600; break;
    }
    if (countFisherman <= 6) {
        shipRent *= 0.90;
    } else if (countFisherman <= 11) {
        shipRent *= 0.85;
    } else if (countFisherman >= 12) {
        shipRent *= 0.75;
    }
    if (countFisherman % 2 === 0 && season !== "Autumn") {
        shipRent *= 0.95;
    }
    if (budget >= shipRent) {
        let moneyLeft = budget - shipRent
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < shipRent) {
        let moneyNeeded = shipRent - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);