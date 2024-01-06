function walking(input) {
    let index = 0;
    let stepGoal = 10000;
    let totalSteps = 0;

    let curentSteps = input[index];
    index++;

    while (curentSteps !== "Going home") {
        curentSteps = Number(curentSteps);

        totalSteps += curentSteps;

        if (totalSteps >= stepGoal) {
            break;
        }


        curentSteps = input[index];
        index++;

    }

    if (curentSteps === "Going home") {
        let stepsNeeded = Number(input[index]);
        totalSteps += stepsNeeded;

        if (totalSteps >= stepGoal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - stepGoal} steps over the goal!`);

        } else {
            console.log(`${stepGoal - totalSteps} more steps to reach goal.`);
        }

    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - stepGoal} steps over the goal!`);
    }

}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1000", "1500", "2000", "6500"]);