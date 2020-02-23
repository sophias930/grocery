let questionCounter = 0;

$(document).ready(() => {
    // loop through all the questions... re-fill the boxes accordingly 
    let firstQuestion = questionBank.get(0);
    let questionContainer = $('.question');
    questionContainer.text(firstQuestion[0]);

    let formContainer = $('#answers');
    for (let i = 1; i < firstQuestion.length; i++) {
        formContainer.append('<input type="checkbox" id="answer'+i+'" name="answer'+i+'" value="'+firstQuestion[i]+'">');
        formContainer.append('<label for="answer'+i+'">' + firstQuestion[i] + '</label><br>');
    }

    formContainer.append('<button onclick=submitted() type="button">Submit</button>');

   
})

function submitted() {
    // TODO will store all the information from each question
        // get the info 

    nextQuestion();
}


function nextQuestion() {
    // will have all questions show up
    questionCounter++;
    if (questionCounter > 2) {
        // we done... 
        questionsDone();
    } else {
        let questionContainer = $('.question');
        let currentQuestion = questionBank.get(questionCounter);
        questionContainer.text(currentQuestion[0]);
    
        let formContainer = $('#answers');
        formContainer.empty();
        for (let i = 1; i < currentQuestion.length; i++) {
            formContainer.append('<input type="checkbox" id="answer'+i+'" name="answer'+i+'" value="'+currentQuestion[i]+'">')
            formContainer.append('<label for="answer'+i+'">' + currentQuestion[i] + '</label><br>')
        }
        formContainer.append('<button onclick=nextQuestion() type="button">Submit</button>');
    }
}

function questionsDone() {
    console.log("You've answered all questions");
    $('#entirepage').empty();
    $('#entirepage').append('<h2>Here are recommended grocery plans catered to you!</h2>');
    $('#entirepage').append('<p>INSERT PLANS HERE</p>');

}
