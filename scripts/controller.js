let questionCounter = 0;

let size = "small";
let aversions = [];
let premade = "yes";
let fruits = 0;
let vegetables = 0;
let grains = 0;
let meat = 0;
let totalCost = 0;
let groceryList = [];

let formContainer = "";

$(document).ready(() => {
    // loop through all the questions... re-fill the boxes accordingly 
    formContainer = $('#answers');
    let firstQuestion = questionBank.get(0);
    let questionContainer = $('.question');
    questionContainer.text(firstQuestion[0]);

    for (let i = 1; i < firstQuestion.length; i++) {
        formContainer.append('<input type="checkbox" id="answer'+i+'" name="answer'+i+'" value="'+firstQuestion[i]+'">');
        formContainer.append('<label for="answer'+i+'">' + firstQuestion[i] + '</label><br>');
    }

    formContainer.append('<button onclick=submitted() type="button">Submit</button>');

   
})

function submitted() {
    // TODO will store all the information from each question
        // get the info 

    // record 'aversions' using aversions.push(aversion);
    // premade to "yes" "no" "50/50"
    // set size to "small" "medium" or "large"

    if (questionCounter == 0) {
        // aversions
        $("#answers input:checkbox:checked").each(function() {
            aversions.push($(this).val());
        });
    } else if (questionCounter == 1) {
        // premade
        $("#answers input:checkbox:checked").each(function() {
            let value = $(this).val();
            if (value == "All scratch") {
                premade = "no";
            } else if (value == "50/50") {
                premade = "50/50";
            }
        });
    } else {
        // size 
        $("#answers input:checkbox:checked").each(function() {
            let value = $(this).val();
            size = value.split(" ")[0];
        });
    }
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
    
        formContainer.empty();
        for (let i = 1; i < currentQuestion.length; i++) {
            formContainer.append('<input type="checkbox" id="answer'+i+'" name="answer'+i+'" value="'+currentQuestion[i]+'">')
            formContainer.append('<label for="answer'+i+'">' + currentQuestion[i] + '</label><br>')
        }
        formContainer.append('<button onclick=submitted() type="button">Submit</button>');
    }
}

function questionsDone() {
    console.log("You've answered all questions");
    let entirePage = $('#entirepage');
    entirePage.empty();
    entirePage.append('<h2>Here is a recommended grocery plan catered to you!</h2>');

    if (size == "small") {
        fruits = 2;
        vegetables = 4;
        meat = 2;
        grains = 2;
        totalCost = "$50"
    } else if (size == "medium") {
        fruits = 8;
        vegetables = 10;
        meat = 8;
        grains = 10;
        totalCost = "$75"
    } else {
        fruits = 12;
        vegetables = 15;
        meat = 12;
        grains = 15;
        totalCost = "$100"
    }

    if (aversions.includes("Vegetarian/Vegan")) {
        meatArray = vegetablesArray;
    }
    if (aversions.includes("Pescatarian")) {
        meatArray = fishArray;
    }
    if (aversions.includes("Fruit")) {
        fruitsArray = vegetablesArray;
    }

    for (let i = fruits; i > 0; i--) {
        let fruit = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];
        groceryList.push(fruit);
    }

    for (let i = vegetables; i > 0; i--) {
        let veg = vegetablesArray[Math.floor(Math.random() * vegetablesArray.length)];
        groceryList.push(veg);
    }

    for (let i = meat; i > 0; i--) {
        let met = meatArray[Math.floor(Math.random() * meatArray.length)];
        groceryList.push(met);
    }

    for (let i = grains; i > 0; i--) {
        let grain = grainArray[Math.floor(Math.random() * grainArray.length)];
        groceryList.push(grain);
    }

    for (let i = 0; i < groceryList.length; i++) {
        entirePage.append(groceryList[i]+'<br>');
    }

    entirePage.append("<br>Your total cost will come out to about " + totalCost);

}
