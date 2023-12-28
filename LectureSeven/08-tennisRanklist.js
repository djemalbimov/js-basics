function tennisRanklist(input) {
    let tornament = Number(input[0]);
    let startPoints = Number(input[1]);

    let wonPoints = 0;
    let totnamentWon = 0;

    for (let i = 2; i < tornament + 2; i++) {
        let result = input[i];

        if (result === "W") {
            wonPoints += 2000;
            totnamentWon++;
        } else if (result === "F") {
            wonPoints += 1200;
        } else if (result === "SF") {
            wonPoints += 720;
        }

    }
    let totalPoints = startPoints + wonPoints;
    console.log(`Final points: ${totalPoints}`);

    let avgPoints = Math.floor(wonPoints / tornament);
    console.log(`Average points: ${avgPoints}`);

    let percentWon = (totnamentWon / tornament) * 100;
    console.log(`${percentWon.toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);