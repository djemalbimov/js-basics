function worldSwimmingRecord(input) {

    let recordInSec = Number(input[0]);
    let distanceInMet = Number(input[1]);
    let timeToSwim = Number(input[2]);

    let timeToSwimWithoutDelay = distanceInMet * timeToSwim;
    let delay = Math.floor(distanceInMet / 15) * 12.5;
    let totalTimeToSwim = (timeToSwimWithoutDelay + delay);

    if (totalTimeToSwim < recordInSec) {
        console.log(` Yes, he succeeded! The new world record is ${totalTimeToSwim.toFixed(2)} seconds.`);

    } else if (totalTimeToSwim >= recordInSec) {
        noWorldRecord = totalTimeToSwim - recordInSec;
        console.log(`No, he failed! He was ${noWorldRecord.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);
worldSwimmingRecord(["10464", "1500", "20"]);




