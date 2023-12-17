function basketballEquipment(input){

    let annualTrainingFee = Number(input[0]);

    let basketballsneakers = annualTrainingFee - annualTrainingFee * 0.40;
    let basketballTshirt = basketballsneakers - basketballsneakers * 0.20;
    let basketballBall = basketballTshirt * 0.25;
    let basketballAccessories = basketballBall * 0.20;

    let totalsum = annualTrainingFee + basketballsneakers + basketballTshirt + basketballBall + basketballAccessories;

    console.log(totalsum);

}
basketballEquipment(["550"]);