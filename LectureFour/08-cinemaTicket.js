function cinemaTicket(input) {
    let day = input[0];
    let prize = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        prize = 12
    } else if (day === "Wednesday" || day === "Thursday") {
        prize = 14
    } else if (day === "Saturday" || day === "Sunday") {
        prize = 16
    }

    console.log(prize);
}

cinemaTicket(["Sunday"]);
cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);