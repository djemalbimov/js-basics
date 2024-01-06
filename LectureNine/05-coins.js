function coins(input) {
    let change = Number(input[0]);
    let stotinki = Math.round(change * 100);
    let coinsReturn = 0;

    while (stotinki > 0) {
        if (stotinki >= 200) {
            stotinki -= 200;
        } else if (stotinki >= 100) {
            stotinki -= 100;
        } else if (stotinki >= 50) {
            stotinki -= 50;
        } else if (stotinki >= 20) {
            stotinki -= 20;
        } else if (stotinki >= 10) {
            stotinki -= 10;
        } else if (stotinki >= 5) {
            stotinki -= 5;
        } else if (stotinki >= 2) {
            stotinki -= 2;
        } else if (stotinki >= 1) {
            stotinki -= 1;
        }
        coinsReturn++;
    }
    console.log(coinsReturn);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);