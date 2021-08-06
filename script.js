// console.log(document.querySelector(".message"));
// document.querySelector(".message").textContent = "correct number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 15;

// document.querySelector(".input-main").value = 23;
// console.log(document.querySelector(".input-main").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {

    document.querySelector(".message").textContent = message;
};

document.querySelector(".check-btn").addEventListener
    ('click', function () {
        const guess = Number(document.querySelector(".guess").value);
        console.log(guess, typeof guess);

        if (!guess) {
            // document.querySelector(".message").textContent = "no number";
            displayMessage("no number");
        }

        // WHEN  ITS PLAY GAME //
        else if (guess === secretNumber) {

            // document.querySelector(".message").textContent = "Correct number";
            displayMessage("correct number");
            document.querySelector(".number").textContent = secretNumber;

            document.querySelector("body").style.backgroundColor = "#60b347";

            document.querySelector(".number").style.width = "26%";


            if (score > highscore) {
                highscore = score;
                document.querySelector(".highscore").textContent = highscore;
            }
            // WHEN ITS TOO HIGH//

        } else if (guess > secretNumber) {

            if (score > 1) {

                // document.querySelector(".message").textContent = "Too High";
                displayMessage = ("too high");
                score--;
                document.querySelector(".score").textContent = score;

            } else {
                // document.querySelector(".message").textContent = "You Lossing game";
                displayMessage = ("you Lossing game");
                document.querySelector(".score").textContent = 0;
            }

            // when its low//

        } else if (guess < secretNumber) {
            if (score > 1) {

                // document.querySelector(".message").textContent = "Too Low";
                displayMessage("Too Low");
                score--;
                document.querySelector(".score").textContent = score;

            } else {
                // document.querySelector(".message").textContent = "You Lossing game";
                displayMessage("You Lossing game");
                document.querySelector(".score").textContent = 0;
            }



        }


    });
// WHEN CLICK AGAIN BUTTON //


document.querySelector(".btn-lg").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "Start guessing";
    displayMessage("start guessing...");

    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".highscore").textContent = "0";
    document.querySelector("number").style.width = "13%";

})
