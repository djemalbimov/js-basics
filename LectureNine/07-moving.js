function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);

    let index = 3;

    let total = width * length * hight;

    let cartons = input[index];
    index++;

    while (cartons !== "Done") {
        cartons = Number(cartons);
        total -= cartons;

        if (total <= 0) {
            console.log(`No more free space! You need ${Math.abs(total)} Cubic meters more.`);
            return;
        }
        cartons = input[index];
        index++;

    }
    if (cartons === "Done") {
        console.log(`${total} Cubic meters left.`);
    }

}

moving(["10","1","2","4","6","Done"]);
moving(["10", "10","2","20","20","20","20","122"]);