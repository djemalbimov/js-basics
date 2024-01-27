function graduation(input) {

    let name = input[0];
    let grade = 1;
    let sum = 0;
    let excluded = 0;
    let currentGrade = Number(input[grade]);
    while (grade <= 12) {

        if (currentGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`); break;
        }

        sum += currentGrade;
        grade++;
        currentGrade = Number(input[grade]);
    }
    let avgGrade = sum / 12;

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);