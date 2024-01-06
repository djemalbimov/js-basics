function cinemaTickets(input) {
    let index = 0;

    let comand = input[index];
    index++;

    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;

    while (comand !== "Finish") {
        let movieName = comand;
        let availablePlaces = Number(input[index]);
        index++

        let comand1 = input[index];
        index++;

        let takenPlaces = 0;

        while (comand1 !== "End") {
            let ticketType = comand1;
            takenPlaces++;

            if (ticketType === "student") {
                studentTickets++;

            } else if (ticketType === "standard") {
                standartTickets++;
            } else {
                kidTickets++;
            }

            if (takenPlaces === availablePlaces) {
                break;
            }

            comand1 = input[index];
            index++;
        }
        let percentTaken = (takenPlaces / availablePlaces) * 100

        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        comand = input[index];
        index++;
    }
    let totalTickets = studentTickets + standartTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let standartTicketsPercent = (standartTickets / totalTickets) * 100;
    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);