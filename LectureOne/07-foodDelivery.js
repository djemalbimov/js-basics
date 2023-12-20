function foodDelivery(input){

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let sumChickenMenu = chickenMenu * 10.35;
    let sumFishMenu = fishMenu * 12.40;
    let sumVeganMenu = veganMenu * 8.15;

    let dessert = (sumChickenMenu + sumFishMenu + sumVeganMenu) * 0.20;

    let totalSum = sumChickenMenu + sumFishMenu + sumVeganMenu + dessert + 2.5;

    console.log(totalSum);
}

foodDelivery(["9", "2", "6"]);