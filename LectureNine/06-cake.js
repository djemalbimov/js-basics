function cake(input) {

    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let index = 2;

    let totalPieces = cakeWidth * cakeLength;

    let piecesTaken = input[index];
    index++;

    while (piecesTaken !== "STOP") {
        piecesTaken = Number(piecesTaken);
        totalPieces -= piecesTaken;

        if (totalPieces <= 0) {
            break;
        }

        piecesTaken = input[index];
        index++;
    }

    if (piecesTaken === "STOP") {
        console.log(`${totalPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }

}

cake(["10", "2", "2", "4", "6", "STOP"]);
cake(["10", "10", "20", "20", "20", "20", "21"]);