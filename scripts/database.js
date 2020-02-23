let questionBank = new Map();
let question1 = ["Any dietary restrictions? (Select all)", "vegetarian/vegan", "pescatarian", "fruit", 
"nuts", "gluten", "lactose intolerance"];
let question2 = ["Do you make most meals from scratch or use premade meals?",
"all premade", "all scratch", "50/50"];
let question3 = ["What size plan fits your needs?", "small (6-8 meals)", "medium (10-12 meals)", "large (15-18 meals)"];

questionBank.set(0, question1);
questionBank.set(1, question2);
questionBank.set(2, question3);

let groceryBank = new Map();
let fruitsArray = ["Apples", "Bananas", "Pears", "Grapes", "Strawberries", "Oranges", "Pineapple",
"Watermelon", "Peaches", "Blueberries", "Cantaloupe", "Kiwis"];
let vegetablesArray = ["Avocados", "Tomatoes", "Zucchini", "Cauliflower", "Carrots", "Broccoli",
"Spinach", "Arugula", "Kale"];
let meatArray = ["Pork Chops", "Ground Beef", "Chicken Breasts", "Chicken Thighs", "Chicken Wings", 
"Salmon Fillets", "Shrimp", "Ground Turkey", "Turkey Slices", "Ham Slices"];
let grainArray = ["White Rice", "Brown Rice", "White Bread", "Whole Grain Bread", 
"Lentils", "Black Beans", "Kidney Beans", "Basmati Rice", "Corn Tortillas", "Flour Tortillas"];
let fishArray = ["Salmon Fillets", "Shrimp"];
