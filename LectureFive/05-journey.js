function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let money = 0;
    let place = "";

    if (budget <= 100) {
        switch (season) {
            case "summer": money = budget * 0.30; destination = "Bulgaria"; place = "Camp"; break;
            case "winter": money = budget * 0.70; destination = "Bulgaria"; place = "Hotel"; break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer": money = budget * 0.40; destination = "Balkans"; place = "Camp"; break;
            case "winter": money = budget * 0.80; destination = "Balkans"; place = "Hotel"; break;
        }
    } else if (budget > 1000) {
        switch (season) {
            case "summer": money = budget * 0.90; destination = "Europe"; place = "Hotel"; break;
            case "winter": money = budget * 0.90; destination = "Europe"; place = "Hotel"; break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${money.toFixed(2)}`);

}

journey(["75", "winter"]);
journey(["50", "summer"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);