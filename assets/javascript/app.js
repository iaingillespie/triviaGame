console.log("we are linked")

// how to org qs and answers - array of objects.

var qAndA = [{
    question: "Question1",
    answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
    correct: "Answer1"
},

{
    question: "Question2",
    answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
    correct: "Answer2"
},

{
    question: "Question3",
    answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
    correct: "Answer3"
}
];

console.log(qAndA);

function gameStart (){
    var currentQuestion =0;
    $("#qh3").text(qAndA[currentQuestion].question)

console.log(qAndA[currentQuestion].answer.length)
    for(var i = 0; i < qAndA[currentQuestion].answer.length; i++){
        console.log(i)
        $("#answers").append("<input type ='radio' name ='Q-"+ currentQuestion + "' value ='"+ qAndA[currentQuestion].answer[i] + "''>" + qAndA[currentQuestion].answer[i] + "<br>" );



            // string 
       // `<input type="radio" name="Q-${i}">`

    }

    //startTimer()

}

gameStart();


//$.each($(input[name='Q-0]:checked), function(){
   // if($(this).val() ===qAndA[0].correctanswer){
       //console.log("WIN")
   //}
//})


// initialise timer
// append q1

// funciton check answer

// funciton check timer



