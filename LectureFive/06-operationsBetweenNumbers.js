function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];

    let result = 0;

    if (symbol === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            console.log(`${n1} + ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} + ${n2} = ${result} - odd`);
        }
    } else if (symbol === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            console.log(`${n1} - ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} - ${n2} = ${result} - odd`);
        }

    } else if (symbol === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            console.log(`${n1} * ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} * ${n2} = ${result} - odd`);
        }

    } else if (symbol === "/") {
        result = n1 / n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
        }

    } else if (symbol === "%") {
        result = n1 % n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} % ${n2} = ${result}`)
        }
    }
}

operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);