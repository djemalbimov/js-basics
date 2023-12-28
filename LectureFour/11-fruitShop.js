function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let finalPrize = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        switch (fruit) {
            case "banana": finalPrize = quantity * 2.50; console.log(finalPrize.toFixed(2)); break;
            case "apple": finalPrize = quantity * 1.20; console.log(finalPrize.toFixed(2)); break;
            case "orange": finalPrize = quantity * 0.85; console.log(finalPrize.toFixed(2)); break;
            case "grapefruit": finalPrize = quantity * 1.45; console.log(finalPrize.toFixed(2)); break;
            case "kiwi": finalPrize = quantity * 2.70; console.log(finalPrize.toFixed(2)); break;
            case "pineapple": finalPrize = quantity * 5.50; console.log(finalPrize.toFixed(2)); break;
            case "grapes": finalPrize = quantity * 3.85; console.log(finalPrize.toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": finalPrize = quantity * 2.70; console.log(finalPrize.toFixed(2)); break;
            case "apple": finalPrize = quantity * 1.25; console.log(finalPrize.toFixed(2)); break;
            case "orange": finalPrize = quantity * 0.90; console.log(finalPrize.toFixed(2)); break;
            case "grapefruit": finalPrize = quantity * 1.60; console.log(finalPrize.toFixed(2)); break;
            case "kiwi": finalPrize = quantity * 3.00; console.log(finalPrize.toFixed(2)); break;
            case "pineapple": finalPrize = quantity * 5.60; console.log(finalPrize.toFixed(2)); break;
            case "grapes": finalPrize = quantity * 4.20; console.log(finalPrize.toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else {
        console.log("error");
    }
}

fruitShop(["tomato", "Monday", "0.5"]);
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);




























