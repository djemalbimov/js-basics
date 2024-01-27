function examPreparation(input) {
    let badGrade = Number(input[0]);
    let index = 1;

    let gradeCount = 0;
    let numBadGrades = 0;
    let totalGradeSum = 0;
    let lastExam = "";

    let exam = input[index];
    let grade = Number(input[index + 1]);
    let maxBadGradesReach = false;

    while (exam !== "Enough") {
        lastExam = exam;
        if (grade <= 4) {
            numBadGrades++;
        }
        if (numBadGrades === badGrade) {
            maxBadGradesReach = true;
            break;

        }
        totalGradeSum += grade;
        gradeCount++;

        index++;
        exam = input[index + 1];
        index++;
        grade = Number(input[index + 1]);

    }
    if (maxBadGradesReach) {
        console.log(`You need a break, ${numBadGrades} poor grades.`);
    } else {
        let avgScore = totalGradeSum / gradeCount;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastExam}`);
    }

}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);