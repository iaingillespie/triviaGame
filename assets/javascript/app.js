console.log("we are linked")

// how to org qs and answers - array of objects.

var qAndA = [{
    question: "Where are we?",
    answer: ["New York", "Auckland", "Bali", "Cape Town"],
    correct: "Auckland",
    image: "assets/images/Auckland.jpg"
},

{
    question: "Where are we?",
    answer: ["Kathmandu", "Ho Chi Minh City", "Chiang Mai", "Tokyo"],
    correct: "Chiang Mai",
    image: "assets/images/chaingmai.jpg"
},

{
    question: "Where are we?",
    answer: ["Marrakesh", "London", "Cairo", "Riyadh"],
    correct: "Marrakesh",
    image: "assets/images/Marrakesh.jpg"
},

{
    question: "Where are we?",
    answer: ["Mexico City", "Quito", "Austin", "Berlin"],
    correct: "Quito",
    image: "assets/images/quito.jpg"
},

{
    question: "Where are we?",
    answer: ["Kingston", "Doha", "Lisbon", "Tel Aviv"],
    correct: "Tel Aviv",
    image: "assets/images/TelAviv.jpg"
},

{
    question: "Where are we?",
    answer: ["Shainghai", "Tokyo", "Philadelphia", "Paris"],
    correct: "Tokyo",
    image: "assets/images/tokyo.jpg"
}

];

var timeCount = 15;
var intervalId;
var gameStarted = false;
var correct = 0;
var incorrect = 0;
var currentQuestion = 0;


$("#start").on("click", gameStart);

$("#reset").on("click", reset);

function checkGameOver() {
    if (currentQuestion > 5){
    $("#answers").empty();
    $("#answers").html("<h1>HE HE Game Over! You got "+correct+"/6 correct! Well Done !</h1> ");
    clearInterval(intervalId);
    $("#timer").empty();
    $("#qh3").empty();
    $("#imagecontainer").empty();
    $("#imagecontainer").append('<img src="assets/images/worldgif.gif" alt="worldgif" height="400" width="400">');

}
}




function gameStart() {

    if (currentQuestion === qAndA.length) {
        endGame();
        alert("game over");
    }

    else if (gameStarted === false) {
        gameStarted = true;

        nextQuestion();
    }

};

function reset () {
    correct = 0;
    incorrect = 0;
    currentQuestion = 0;
    $("#qh3").empty();
    $("#answers").empty();
    $("#answers").text("Pres Start to Begin");
    $("#timer").empty();
    $("#imagecontainer").empty();
    clearInterval(intervalId);
    timeCount = 15;
    endGame();

}



// Timer Function

function timer() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timeCount--;
    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>Time remaining:" + timeCount + "</h2>");

    if (currentQuestion > qAndA.length){
        endGame();
    }
    
    else if (timeCount === 0) {
        clearInterval(intervalId);
        answerCheck();
        currentQuestion++;
        timeCount = 15;
        nextQuestion();
    };
};

function nextQuestion() {
    checkGameOver();
    $("#qh3").text(qAndA[currentQuestion].question)
    $("#answers").empty();
    for (var i = 0; i < qAndA[currentQuestion].answer.length; i++) {

    $("#answers").append("<input type ='radio' name ='Q-" + currentQuestion + "' value ='" + qAndA[currentQuestion].answer[i] + "''>" + qAndA[currentQuestion].answer[i] + "<br>");

    $("#imagecontainer").empty();
    $("#imagecontainer").append("<img src='" + qAndA[currentQuestion].image +"' height='300' width='450' margin-right=auto margin-left=auto >");



    };

    timer();

};

function answerCorrect () {
    correct++;
    alert("correct");
    console.log("Correct " + correct);
    console.log("Incorrect " + incorrect);
};

function answerIncorrect () {
    incorrect++;
    alert("Incorrect");
    console.log("Correct " + correct);
    console.log("Incorrect " + incorrect);
};


function answerCheck() {

    $.each($('input[name="Q-0"]:checked'), function () {
        if ($(this).val() === qAndA[0].correct) {
            answerCorrect();
        }


        else {
            answerIncorrect();
        }
        
        
        });

        $.each($('input[name="Q-1"]:checked'), function () {
            if ($(this).val() === qAndA[1].correct) {
                answerCorrect();
            }
            else {
                answerIncorrect();
            }
        });

        $.each($('input[name="Q-2"]:checked'), function () {
            if ($(this).val() === qAndA[2].correct) {
                answerCorrect();
            }
            else {
                answerIncorrect();
            }
        });

        $.each($('input[name="Q-3"]:checked'), function () {
            if ($(this).val() === qAndA[3].correct) {
                answerCorrect();
            }
            else {
                answerIncorrect();
            }
        });

        $.each($('input[name="Q-4"]:checked'), function () {
            if ($(this).val() === qAndA[4].correct) {
                answerCorrect();
            }
            else {
                answerIncorrect();
            }
        });

        $.each($('input[name="Q-5"]:checked'), function () {
            if ($(this).val() === qAndA[5].correct) {
                answerCorrect();
            }
            else {
                answerIncorrect();
            }
        });

    };

    function endGame() {
        gameStarted = false;
    }







