function evenPowers(input) {
    let n = Number(input[0]);
    let num = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}

evenPowers(["3"]);
evenPowers(["4"]);
evenPowers(["5"]);
evenPowers(["6"]);
evenPowers(["7"]);