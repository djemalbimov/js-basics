function sumPrimeNonPrime(input) {
    let index = 0;

    let comand = input[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (comand !== "stop") {
        let curNum = Number(comand);

        if (curNum < 0) {
            console.log(`Number is negative.`);
            comand = input[index];
            index++
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < curNum; divider++) {
            if (curNum % divider === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            sumPrime += curNum;
        } else {
            sumNonPrime += curNum;
        }

        comand = input[index];
        index++;

    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["0","-9","0","stop"]);