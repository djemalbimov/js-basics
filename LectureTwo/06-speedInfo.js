function speedInfo(input) {
    let speed = Number(input[0]);
    if (speed > 1000) {
        console.log("extremely fast");
    } else if (150 < speed && speed <= 1000) {
        console.log("ultra fast");
    } else if (50 < speed && speed <= 150) {
        console.log("fast");
    } else if (10 < speed && speed <= 50) {
        console.log("average");
    } else if (speed <= 10) {
        console.log("slow");
    }

}
speedInfo(["3500"])