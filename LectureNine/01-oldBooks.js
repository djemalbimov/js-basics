function oldBooks(input) {
    let bookSearch = input[0];
    let index = 1;
    let bookIsFound = false;

    let nextBook = input[index];

    while (nextBook !== "No More Books") {
        if (nextBook === bookSearch) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = input[index]
    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);

    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }

}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);