let questionCounter = 0;

let size = "small";
let aversions = [];
let premade = "yes";
let fruits = 0;
let vegetables = 0;
let grains = 0;
let meat = 0;
let totalCost = 0;
let groceryList = new Map();

let formContainer = "";

$(document).ready(() => {
    // loop through all the questions... re-fill the boxes accordingly 
    formContainer = $('#answers');
    let firstQuestion = questionBank.get(0);
    let questionContainer = $('.question');
    questionContainer.text(firstQuestion[0]);

    for (let i = 1; i < firstQuestion.length; i++) {
        formContainer.append('<input type="checkbox" id="answer'+i+'" name="answer'+i+'" value="'+firstQuestion[i]+'">');
        formContainer.append('<label for="answer'+i+'"> '  + firstQuestion[i] + '</label><br>');
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
            formContainer.append('<label for="answer'+i+'"> ' + currentQuestion[i] + '</label><br>')
        }
        formContainer.append('<button onclick=submitted() type="button">Submit</button>');
    }
}

function questionsDone() {
    console.log("You've answered all questions");
    let entirePage = $('.single_service');
    entirePage.empty();
    entirePage.append('<h3>Here is a grocery plan catered to you for the week!</h3>');

    if (size == "small") {
        fruits = 2;
        vegetables = 3;
        meat = 2;
        grains = 3;
        totalCost = "$50"
    } else if (size == "medium") {
        fruits = 4;
        vegetables = 5;
        meat = 3;
        grains = 4;
        totalCost = "$75"
    } else {
        fruits = 5;
        vegetables = 6;
        meat = 5;
        grains = 5;
        totalCost = "$100"
    }

    if (aversions.includes("vegetarian/vegan")) {
        meatArray = vegetablesArray;
    }
    if (aversions.includes("pescatarian")) {
        meatArray = fishArray;
    }
    if (aversions.includes("fruit")) {
        fruitsArray = vegetablesArray;
    }

    for (let i = fruits; i > 0; i--) {
        let fruit = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];
        if (groceryList.has(fruit)) {
            groceryList.set(fruit, groceryList.get(fruit) + 1);
        } else {
            groceryList.set(fruit, 1);
        }
    }

    for (let i = vegetables; i > 0; i--) {
        let veg = vegetablesArray[Math.floor(Math.random() * vegetablesArray.length)];
        if (groceryList.has(veg)) {
            groceryList.set(veg, groceryList.get(veg) + 1);
        } else {
            groceryList.set(veg, 1);
        }
    }

    for (let i = meat; i > 0; i--) {
        let met = meatArray[Math.floor(Math.random() * meatArray.length)];
        if (groceryList.has(met)) {
            groceryList.set(met, groceryList.get(met) + 1);
        } else {
            groceryList.set(met, 1);
        }    
    }

    for (let i = grains; i > 0; i--) {
        let grain = grainArray[Math.floor(Math.random() * grainArray.length)];
        if (groceryList.has(grain)) {
            groceryList.set(grain, groceryList.get(grain) + 1);
        } else {
            groceryList.set(grain, 1);
        }    
    }

    let keyset = groceryList.keys();
    console.log(groceryList);
    console.log(keyset);

    for (let key of keyset) {
        if (groceryList.get(key) > 1) {
            entirePage.append(key + ' ('+groceryList.get(key) + ')<br>');
        } else {
            entirePage.append(key+'<br>');

        }
    }
/*
    groceryList.forEach(function(item) {
        entirePage.append(item);

    }) */

    $('.signle_service_left').empty();
    $('.signle_service_left').append('<img src="assets/images/workhome3.jpg" alt="" />')

    entirePage.append("<br><b>Your total cost will come out to about " + totalCost+"</b>");
    entirePage.append('<br><button type="button">Edit Order</button>')
    entirePage.append('<button type="button">Order Now!</button>')


}
