function vacationBooksList(input) {
let pagesInBook = Number(input[0]);
let pagesPerHour = Number(input[1]);
let daysToReadBook = Number(input[2]);

let totalTimeToReadBook = pagesInBook / pagesPerHour;

let hoursPerDayToRead = totalTimeToReadBook / daysToReadBook;

console.log(hoursPerDayToRead);

}

vacationBooksList(["432", "15", "4"]);