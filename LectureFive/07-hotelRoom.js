function hotelRoom(input) {
    let month = input[0];
    let overnightStays = Number(input[1]);

    let totalApartmentCount = 0;
    let totalStudioCount = 0;

    switch (month) {
        case "May": totalApartmentCount = 65 * overnightStays; totalStudioCount = 50 * overnightStays; break;
        case "June": totalApartmentCount = 68.70 * overnightStays; totalStudioCount = 75.20 * overnightStays; break;
        case "July": totalApartmentCount = 77 * overnightStays; totalStudioCount = 76 * overnightStays; break;
        case "August": totalApartmentCount = 77 * overnightStays; totalStudioCount = 76 * overnightStays; break;
        case "September": totalApartmentCount = 68.70 * overnightStays; totalStudioCount = 75.20 * overnightStays; break;
        case "October": totalApartmentCount = 65 * overnightStays; totalStudioCount = 50 * overnightStays; break;
    }
    if (month === "May" || month === "October") {
        if (overnightStays > 7 && overnightStays < 14) {
            totalStudioCount = 0.95 * totalStudioCount;
        }

    } if (month === "May" || month === "October") {
        if (overnightStays > 14) {
            totalStudioCount = 0.70 * totalStudioCount;
        }

    } else if (month === "June" || month === "September") {
        if (overnightStays > 14) {
            totalStudioCount = 0.80 * totalStudioCount;
        }

    }
    if (month === "May" || month === "June" || month === "July" || month === "August" || month === "September" || month === "October") {
        if (overnightStays > 14) {
            totalApartmentCount *= 0.90;
        }

    }
    console.log(`Apartment: ${totalApartmentCount.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioCount.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);