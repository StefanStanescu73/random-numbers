alert(" Bun venit!");

let luckySix = function () {
    let sixNumbers = [];
    for (let i = 0; i < 6; i++) {
        sixNumbers[i] = Math.floor(Math.random() * 49) + 1;
    }
    sixNumbers.sort(function (a, b) {
        return a - b;
    });

    while (
        sixNumbers[0] == sixNumbers[1] ||
        sixNumbers[1] == sixNumbers[2] ||
        sixNumbers[2] == sixNumbers[3] ||
        sixNumbers[3] == sixNumbers[4] ||
        sixNumbers[4] == sixNumbers[5]
    ) {
        for (let i = 0; i < 6; i++) {
            sixNumbers[i] = Math.floor(Math.random() * 49) + 1;
        }
        sixNumbers.sort(function (a, b) {
            return a - b;
        });
    }
    document.getElementById("numbersDrawn").innerHTML = sixNumbers;
};

let luckyFive = function () {
    let fiveNumbers = [];
    for (let i = 0; i < 5; i++) {
        fiveNumbers[i] = Math.floor(Math.random() * 40) + 1;
    }
    fiveNumbers.sort(function (a, b) {
        return a - b;
    });

    while (
        fiveNumbers[0] == fiveNumbers[1] ||
        fiveNumbers[1] == fiveNumbers[2] ||
        fiveNumbers[2] == fiveNumbers[3] ||
        fiveNumbers[3] == fiveNumbers[4]
    ) {
        for (let i = 0; i < 5; i++) {
            fiveNumbers[i] = Math.floor(Math.random() * 40) + 1;
        }
        fiveNumbers.sort(function (a, b) {
            return a - b;
        });
    }
    document.getElementById("numbersDrawn").innerHTML = fiveNumbers;
};

let endProgram = function () {
    alert("La revedere! Pe curând!");
    console.clear();
    // document.getElementById("numbersDrawn").remove();
    document.getElementById("numbersDrawn").innerHTML = "Noroc!!!";
};
