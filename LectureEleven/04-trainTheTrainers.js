function trainTheTrainers(input) {
    let index = 0;

    let judgeCount = Number(input[index]);
    index++;

    let comand = input[index];
    index++;

    let totalGradeSum = 0;
    let totalGradeCount = 0;

    while (comand !== "Finish") {
        let presentationName = comand;
        let gradeSum = 0;

        for (let i = 0; i < judgeCount; i++) {
            let curGrade = Number(input[index]);
            index++;

            gradeSum += curGrade;
        }
        let avgGrade = gradeSum / judgeCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        totalGradeSum += avgGrade;
        totalGradeCount++;

        comand = input[index];
        index++;
    }
    let finalAvgSum = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${finalAvgSum.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);