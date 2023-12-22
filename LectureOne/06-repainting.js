function repainting(input){ 
  let nylonQuantity = Number(input[0]);
  let paintQuantity = Number(input[1]);
  let tinnerQuantity = Number(input[2]);
  let hoursForWork = Number(input[3]);

  let totalNylonQuantity = nylonQuantity + 2;
  let totalPaintQuantity = (paintQuantity * 0.10)+paintQuantity;
  
  let totalMaterialQuantity = totalNylonQuantity * 1.5 + totalPaintQuantity * 14.50 + tinnerQuantity * 5 + 0.40;
  let workersSumPerHour = (totalMaterialQuantity *0.3);
  let workHours = workersSumPerHour * hoursForWork

  let totalSum = totalMaterialQuantity + workHours;

  console.log(totalSum);
}

repainting(["5", "10", "10", "1"]);