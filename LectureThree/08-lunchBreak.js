function lunchBreak(input) {

    let seriesName = input[0];
    let seriesTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime * 0.125;
    let restTime = breakTime * 0.250;

    let totalTimeLeft = breakTime - timeForLunch - restTime;

    if (seriesTime <= totalTimeLeft) {
        minutesLeft = Math.ceil(totalTimeLeft - seriesTime);
        console.log(`You have enough time to watch ${seriesName} and left with ${minutesLeft} minutes free time.`);

    } else if (seriesTime > totalTimeLeft) {
        timeNeeded = Math.ceil(seriesTime - totalTimeLeft);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    }

}

lunchBreak(["Teen Wolf", "48", "60"]);
lunchBreak(["Game of Thrones", "60", "96"]);


