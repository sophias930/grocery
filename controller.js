

$(document).ready(() => {
    // loop through all the questions... re-fill the boxes accordingly 
    loopThroughQuestions();

})


function loopThroughQuestions() {
    // TODO will have all questions show up
    // TODO will store all the information from each question

    $('#questions').submit(function() {
        // get all the inputs into an array.
        var inputs = $('#questions :input');
        // do something w this.. 

        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs[i]);
        }
    });
}