let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//1. SELECTORS
let rollBtn = document.getElementById("roll");
let roll_1000_Btn = document.getElementById("roll1000");
let resetBtn = document.getElementById("reset"); 
let resultDiv = document.getElementById("result");
let graphDiv = document.getElementById("graph");


// 2. EVENT LISTENERS
rollBtn.addEventListener("click", renderGraph);
roll_1000_Btn.addEventListener("click", roll1000Times);
resetBtn.addEventListener("click", resetFunction);

//3. FUNCTIONS
function rollDie() {
//returns a randon number between 1-6.
let roll = Math.floor(Math.random() * 6) + 1;
return roll;
}

function rollDice() {
// rolls two dice and adds together the sum
    let a = rollDie();
    let b = rollDie();
    let sum = a + b;
    return sum;
}

function renderGraph() {
    //"BACK END" DATA / VARIABLES
    let myRoll = rollDice(); //myRoll could equal the numbers 2 to 12
    results[myRoll] += 1; // update the result array
    
    
    //"FRONT END" RENDER / GRAPHICS
    resultDiv.innerHTML = `You rolled a ${myRoll}!`; //show the roll

   graphDiv.innerHTML = ""; // reset the graph div

    for (let i = 2; i < results.length; i++) {
        let newDiv = document.createElement("div"); // creates a new div          
        newDiv.innerHTML = `You rolled a ${i}:<br> ${results[i]}  times`;
        newDiv.className = "newDiv_Style";
        graphDiv.append(newDiv); // adds the div as a "child" to the "parent" graphDiv
        
    }
   
}

function roll1000Times() {
//"BACK END": DATA / VARIABLES
let myRoll = "";
for (let i = 0; i < 1000; i++) {
  myRoll = rollDice(); // myRoll could equal the numbers 2 to 12
  results[myRoll] += 1; // update the result array
}
graphDiv.innerHTML = ""; // reset the graph div

for (let i = 2; i < results.length; i++) {
    let newDiv = document.createElement("div"); // creates a new div          
    newDiv.innerHTML = `You rolled a ${i}:<br> ${results[i]}  times`;
    newDiv.className = "newDiv_Style";
    graphDiv.append(newDiv); // adds the div as a "child" to the "parent" graphDiv
    
}
}

function resetFunction() {
    results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    resultDiv.innerHTML = ""; // clear the result div
    graphDiv.innerHTML = ""; // reset the graph div
}

