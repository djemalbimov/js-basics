function histogram(input) {
    let n = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (num < 200) {
            count1++;
        } else if (num <= 399) {
            count2++;
        } else if (num <= 599) {
            count3++;
        } else if (num <= 799) {
            count4++;
        } else if (num >= 800) {
            count5++
        }
    }

    let p1 = (count1 / n) * 100;
    let p2 = (count2 / n) * 100;
    let p3 = (count3 / n) * 100;
    let p4 = (count4 / n) * 100;
    let p5 = (count5 / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram(["3","1","2","999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);