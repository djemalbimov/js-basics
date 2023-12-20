function fishTank(input){
    let aquariumLengthcInCentimeters = Number(input[0]);
    let aquariumWidthInCentimeters = Number(input[1]);
    let aquariumHeightInCentimeters = Number(input[2]);
    let percentMaterialsInAquarium = Number(input[3]);

    let litersWaterInAquarium = (aquariumLengthcInCentimeters / 10) * (aquariumWidthInCentimeters / 10) * (aquariumHeightInCentimeters / 10);
    let totalWater = litersWaterInAquarium - (litersWaterInAquarium * percentMaterialsInAquarium/100);

    console.log(totalWater);

}

fishTank(["85", "75", "47", "17"]);