function timePlusFiftheenMinutes(input) {

    let initialHours = Number(input[0]);
    let initialMinutes = Number(input[1]);

    let totalMinutes = initialHours * 60 + initialMinutes + 15;

    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    if (hours === 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);

    } else {
        console.log(`${hours}:${minutes}`);
    }

}

timePlusFiftheenMinutes(["12", "49"]);
timePlusFiftheenMinutes(["1", "46"]);
timePlusFiftheenMinutes(["0", "01"]);
timePlusFiftheenMinutes(["23", "59"]);
timePlusFiftheenMinutes(["11", "08"]);
