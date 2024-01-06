function submitSolution(input) {
    let i = 0;
    let word = input[i];

    while (word !== "Stop") {
        console.log(word);
        i++;
        word = input[i];
    }
}

submitSolution(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
submitSolution(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);