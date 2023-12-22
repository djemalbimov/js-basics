function suppliesForSchool(input) {
let numberOfPacketsOfChemicals = Number(input[0]);
let numberOfTagPackets = Number(input[1]);
let litersOfChalkboardCleaner = Number(input[2]);
let reductionPercentage = Number(input[3]);

let packetsOfChemicalsWorth = numberOfPacketsOfChemicals * 5.80;
let tagPacketsWorth = numberOfTagPackets * 7.20;
let chalkboardCleanerWorth = litersOfChalkboardCleaner * 1.20;



let totalSum = packetsOfChemicalsWorth + tagPacketsWorth + chalkboardCleanerWorth;
let totalSumReduction = totalSum - (totalSum * reductionPercentage / 100);

console.log(totalSumReduction);

}

suppliesForSchool(["4", "2", "5", "13"]);