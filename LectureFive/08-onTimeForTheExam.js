function onTimeForTheExam(input) {

    let examTime = Number(input[0]);
    let examTimeMin = Number(input[1])
    let arriveTime = Number(input[2]);
    let arriveTimeMin = Number(input[3]);

    let totalExamTime = examTime * 60 + examTimeMin;
    let totalArriveTime = arriveTime * 60 + arriveTimeMin;

    let difference = 0;
    let hh = 0;
    let mm = 0;

    difference = Math.abs(totalExamTime - totalArriveTime);

    if (totalExamTime < totalArriveTime) {
        console.log("Late");
    } else if (totalExamTime === totalArriveTime) {
        console.log("On time");
    } else if (totalExamTime > totalArriveTime && difference <= 30) {
        console.log("On time");
    } else if (totalExamTime > totalArriveTime && difference > 30) {
        console.log("Early");
    }
    if (totalArriveTime < totalExamTime && difference < 60) {
        console.log(`${difference} minutes before the start`);
    } else if (totalArriveTime < totalExamTime && difference >= 60) {
        hh = difference / 60;
        mm = difference % 60;
        if (mm < 10) {
            console.log(`${Math.floor(hh)}:0${mm} hours before the start`)
        } else if (mm >= 10) {
            console.log(`${Math.floor(hh)}:${mm} hours before the start`)
        }

    } else if (totalArriveTime > totalExamTime && difference < 60) {
        console.log(`${difference} minutes after the start`);
    } else if (totalArriveTime > totalExamTime && difference >= 60) {
        hh = difference / 60;
        mm = difference % 60;
        if (mm < 10) {
            console.log(`${Math.floor(hh)}:0${mm} hours after the start`);
        } else if (mm > 10) {
            console.log(`${Math.floor(hh)}:${mm} hours after the start`);
        }
    }
}

onTimeForTheExam(["11", "30", "12", "29"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);