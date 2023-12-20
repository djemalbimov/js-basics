function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];

    let nights = days - 1;
    let sum = 0;

    if (nights < 10) {
        switch (room) {
            case "room for one person": sum = nights * 18.00; break;
            case "apartment": sum = nights * 25.00 * 0.7; break;
            case "president apartment": sum = nights * 35.00 * 0.10; break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (room) {
            case "room for one person": sum = nights * 18.00; break;
            case "apartment": sum = nights * 25.00 * 0.65; break;
            case "president apartment": sum = nights * 35 * 0.85; break;
        }
    } else if (nights > 15) {
        switch (room) {
            case "room for one person": sum = nights * 18.00; break;
            case "apartment": sum = nights * 25.00 * 0.50; break;
            case "president apartment": sum = nights * 35 * 0.80; break;
        }
    }
    if (evaluation === "positive") {
        sum *= 1.25;
    } else if (evaluation === "negative") {
        sum *= 0.90;
    }

    console.log(sum.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);