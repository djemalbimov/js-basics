function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sales < 0) {
                console.log("error"); break;
            } else if (sales >= 0 && 500 >= sales) {
                commission = sales * 0.05;
            } else if (sales > 500 && 1000 >= sales) {
                commission = sales * 0.07;
            } else if (sales > 1000 && 10000 >= sales) {
                commission = sales * 0.08;
            } else if (sales > 10000) {
                commission = sales * 0.12;
            } console.log(commission.toFixed(2)); break;

        case "Varna":
            if (sales < 0) {
                console.log("erroe"); break;
            } else if (sales >= 0 && 500 >= sales) {
                commission = sales * 0.045;
            } else if (sales > 500 && 1000 >= sales) {
                commission = sales * 0.075;
            } else if (sales > 1000 && 10000 >= sales) {
                commission = sales * 0.10;
            } else if (sales > 10000) {
                commission = sales * 0.13;
            } console.log(commission.toFixed(2)); break;

        case "Plovdiv":
            if (sales < 0) {
                console.log("error"); break;
            } else if (sales >= 0 && 500 >= sales) {
                commission = sales * 0.055;
            } else if (sales > 500 && 1000 >= sales) {
                commission = sales * 0.08;
            } else if (sales > 1000 && 10000 >= sales) {
                commission = sales * 0.12;
            } else if (sales > 10000) {
                commission = sales * 0.145;
            } console.log(commission.toFixed(2)); break;

        default: console.log("error")

    }
}

tradeCommissions(["Plovdiv","499.99"]);
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);




