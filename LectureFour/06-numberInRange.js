function numberInRange(input) {
    let number = Number(input[0]);

    if (number >= -100 && 100 >= number && number !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(["25"]);
numberInRange(["0"]);
numberInRange(["-25"]);