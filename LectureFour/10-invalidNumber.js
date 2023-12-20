function invalidNumber(input) {
    let n = Number(input[0]);
    let isValid = (n >= 100 && n <= 200 || n === 0)

    if (!isValid) {
        console.log("invalid");
    }
}

invalidNumber(["150"]);
invalidNumber(["75"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);




