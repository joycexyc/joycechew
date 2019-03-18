alert("Let's make a pizza."); 

var customerName = prompt("What is your name?", "John Doe"); // `prompt("Message", "Default")` will prompt the "Message" in a dialog box in the browser. The value of `customerName` will be set to that text input by the user. "Default" in this example will be the default text that is displayed the input when the prompt pops up. For this project, we'll always be providing some default text for the user. In this case, the default text is "John Doe".

// ---------- ---------- ---------- STEP 1 STUDENT CODE START
var pieCount = prompt("How many pizzas will you be ordering? Enter integer e.g. (1, 3, etc.)", "2");
pieCount = parseInt(pieCount, 10); // Even though the user enters a number into the prompt, it is actually a String value of that number! E.g. 1 is actually "1". We need a Number data type in order to use it in mathematical calculations later. Thus, `parseInt(numberStr, 10)` will parse the String `numberStr`, and convert it a Number data type. E.g. String "1" becomes Number 1. `pieCount` is now a Number, and can be treated as one.
var serviceFee = 0;
if (pieCount > 5) {
 serviceFee = 0;}
else if (pieCount >= 3 && pieCount < 5) {
  serviceFee = pieCount * 2;}
else if (pieCount <= 2) {
  serviceFee = pieCount * 3;
}

console.log(customerName + ", you are ordering " + pieCount + " pizzas."); // Joe, you are ordering 3 pizzas.
console.log("The current service fee is: $" + serviceFee + ".00"); // The current service fee is: $6.00
// ---------- ---------- ---------- STEP 1 STUDENT CODE END

// ---------- ---------- ---------- STEP 2 STUDENT CODE START
var pizzaSize = prompt("Enter the size of the pizza: S, M, or L", "S").toLowerCase(); // `toLowerCase()` will convert all input text into the prompt to become lowercase. Therefore, it won't matter if the user inputs "S" or "s".
var perPizzaPrice;
var subTotalPrice = 0;

if (pizzaSize = "s") {
  perPizzaPrice = 8;}
else if (pizzaSize = "m") {
 perPizzaPrice = 12; 
}
else if (pizzaSize = "l") {
 perPizzaPrice = 16; 
}

subTotalPrice = (perPizzaPrice * pieCount) + serviceFee;

console.log(customerName + ", the subtotal of your order is: $" + subTotalPrice + ".00"); // --> e.g. "Joe, the subtotal of your pizza is: $12.00"
// ---------- ---------- ---------- STEP 2 STUDENT CODE END

alert("Okay! " + customerName + ", let's create your pizza.");

// ---------- ---------- ---------- STEP 3 STUDENT CODE START
var ingredients = ['pepper', 'olive', 'mushroom', 'onion', 'pineapple', 'pepperoni', 'bacon', 'sausage', 'ham', 'anchovy'];
var ingredientsText = "Enter a topping: " + ingredients.join(", ") + "."; // Let's give the user explicit choices.


console.log(ingredientsText); // --> "Enter a topping: pepper, olive, mushroom, ... ham, anchovy."
// ---------- ---------- ---------- STEP 3 STUDENT CODE END

// ---------- ---------- ---------- STEP 4 STUDENT CODE START
var orderIngredients = []; // This is an array of the user's selected ingredients 
var pizzaToppingsStatus = ""; // This will be a comma separated text of user's pizza ingredients

var creatingPizza = true;
while(creatingPizza) {
    var toppingToAdd = prompt(ingredientsText, "Pepperoni");
    orderIngredients.push(toppingToAdd);

    var addAnother = prompt("Add another topping? Enter (Y)es or (N)o.", "N").toLowerCase();
    if (addAnother === "y" || addAnother === "yes") {
        creatingPizza = true;
    } else {
        creatingPizza = false;
    }
}
for (var i = 0; i < orderIngredients.length; i++) {
	
  if (orderIngredients.length === 1) {
     pizzaToppingsStatus += orderIngredients[0]; 
    } else if (orderIngredients.length === 2) {
      pizzaToppingsStatus += orderIngredients[i];
      	if (i === 0) {
         pizzaToppingsStatus += " and "; 
        	}
    	} else {
          pizzaToppingsStatus += orderIngredients[i];
          if (i < orderIngredients.length - 2) {
         pizzaToppingsStatus += ", "; 
        	} else if (i < orderIngredients.length - 1) {
                       pizzaToppingsStatus += ", and ";        
        }
     }
}


console.log("Your " + pizzaToppingsStatus + " pizza looks delicious."); // Your mushroom, anchovy, and pineapple pizza looks delicious. 
//Your mushroom, anchovy, and pineapple pizza looks delicious.
// ---------- ---------- ---------- STEP 4 STUDENT CODE END

// ---------- ---------- ---------- STEP 5 STUDENT CODE START
// var ingredients = ['pepper', 'olive', 'mushroom', 'onion', 'pineapple', 'pepperoni', 'bacon', 'sausage', 'ham', 'anchovy'];

var size = ""; // small, medium, large 
if (pizzaSize = "s") { 
size = "small";
}
else if (pizzaSize = "m") {
 size = "medium" ;
}

else if (pizzaSize = "l") {
 size = "large"; 
}


var totalPrice = 0; 
var taxRate = 0.05; 
var basePizzaPrice = 0; 
var extraToppingsFee = 0; 
var salesTax = 0;

var basePizzaPrice = perPizzaPrice * pieCount;

var xtraCharge = 0;
for (var k = 1; k < orderIngredients.length; k++) {
  	switch (orderIngredients) {
      case "pepper":
      xtraCharge += 1;
      break;
      case "olive":
      xtraCharge += 1;
      break;
      case "mushroom":
      xtraCharge += 1;
      break;
      case "onion":
      xtraCharge += 1;
      break;
      case "pineapple":
      xtraCharge += 1;
      break;
      case "pepperoni":
      xtraCharge += 1.5;
      break;
      case "bacon":
      xtraCharge += 1.5;
      break;
      case "sausage":
      xtraCharge += 1.5;
      break;
      case "ham":
      xtraCharge += 1.5;
      break;
      case "anchovy":
      xtraCharge += 1.5;
      break;
      default:
      xtraCharge += 0;
    }
}


var extraToppingsFee = xtraCharge * pieCount;
var beforeTax = basePizzaPrice + serviceFee + extraToppingsFee;
var salesTax = (beforeTax * taxRate);
var totalPrice = (beforeTax + salesTax);


console.log(customerName + ", you ordered " + pieCount + " " + size + ", " + pizzaToppingsStatus + " pizza(s).");
console.log("Service fee: $" + serviceFee.toFixed(2));
console.log("Base Price: $" + basePizzaPrice.toFixed(2));
console.log("Extra toppings fee: $" + extraToppingsFee.toFixed(2));
console.log("Sales tax 5%: $" + salesTax.toFixed(2));
console.log("----------------------------"); 
console.log("TOTAL: $" + totalPrice.toFixed(2));
// ---------- ---------- ---------- STEP 5 STUDENT CODE END