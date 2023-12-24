function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let totalPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kalimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        let peopleCount = Number(input[i]);
        totalPeople += peopleCount;

    }

    for (let i = 1; i <= numberOfGroups; i++) {
        let num = Number(input[i]);

        if (num <= 5) {
            musala += num;
        } else if (num <= 12) {
            monblan += num;
        } else if (num <= 25) {
            kalimanjaro += num;
        } else if (num <= 40) {
            k2 += num;
        } else if (num >= 41) {
            everest += num;
        }
    }

    let trekkingMusala = (musala / totalPeople) * 100;
    let trekkingMonblan = (monblan / totalPeople) * 100;
    let trekkingKalimanjaro = (kalimanjaro / totalPeople) * 100;
    let trekkingK2 = (k2 / totalPeople) * 100;
    let trekkingEverest = (everest / totalPeople) * 100;

    console.log(`${trekkingMusala.toFixed(2)}%`);
    console.log(`${trekkingMonblan.toFixed(2)}%`);
    console.log(`${trekkingKalimanjaro.toFixed(2)}%`);
    console.log(`${trekkingK2.toFixed(2)}%`);
    console.log(`${trekkingEverest.toFixed(2)}%`);

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);