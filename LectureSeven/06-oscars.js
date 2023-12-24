function oscars(input) {
    let name = input[0];
    let pointsFromAcademy = Number(input[1]);
    let numberOfEvaluator = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let evaluationName = input[i];
        let evaluationPoints = Number(input[i + 1]);

        let pointsWon = evaluationName.length * evaluationPoints / 2;
        pointsFromAcademy += pointsWon

        if (pointsFromAcademy > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`); break;
        }
    }
    if (pointsFromAcademy <= 1250.5) {
        pointsNeeded = 1250.5 - pointsFromAcademy
        console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);