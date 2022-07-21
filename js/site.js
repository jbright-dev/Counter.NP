//Controller Function//
// The Controller Function, or Controller, drives the application

//Declare a new function that calls the built in getNumbers function with no parameters
function getNumbers(){

    /* Within the scope-block of the function create a variable of startValue that is defined as the value of the document-element possesing the id of startValue*/
    let startValue = document.getElementById("startValue").value;

    /* Within the scope-block of the function create a variable of endValue that is defined as the value of the document-element possesing the id of endValue*/
    let endValue = document.getElementById("endValue").value;
    
    /*The variable startValue is defined as the value of the called built in parse integer function, and the value of the passed through variable startValue*/
    startValue = parseInt(startValue);

    /*The variable endValue is defined as the value of the called built in parse integer function, and the value of the passed through variable endValue*/
    endValue = parseInt(endValue);
    
    /*Create an if-else statement where if the value of the built in isInteger function with the individual parameters of startValue and endValue is a Number...*/
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        /*...Within the scope block of the if statement create a variable of numbers which is defined as the value of the called built in generateNumbers function with the parameters of startValue and endValue*/
        let numbers = generateNumbers(startValue,endValue);

        /*Call the built in displayValues function with the parameter of numbers*/
        displayValues(numbers);

    //...or
    }else{

        /*Trigger a Sweet Alert*/
        Swal.fire({
            backdrop: false,
            title: "Counter.NP",
            text: "Watch out for the Hook!: You need to enter actual numbers",
        }
        );
    }
}

//Business Logic: What it does that people are paying for//
//Generate a list of numbers


/*Declare a new function which calls the built in generateNumbers function and possesses the parameters of start and stop*/
function generateNumbers(start, stop){

    //Create a variable of numbers which is defined as an array
    let numbersArray = [];

    //Create a for-loop where we create a variable of i which is defined as the value of start. As long as the value of i is less than or equal to the value of stop, add one to the value of i
    for (let i = start; i <= stop; i++){

        /*Within the scope block of the loop, the value of i is appended to the end of the array named numbersArray*/
        numbersArray.push(i);
                
    }

    //Return the value for the variable array
    return numbersArray;

}


//View Function

//display the list of numbers; Should Bold and Blue Even Numbers
//Should Italicize and Red Odd Numbers

/*Declare a new function which calls the function displayValues and possesses the parameter of displayArray*/
function displayValues(displayArray){
        
    //Create a variable of results which is defined as the value of the document element possessing the Id of "results"
    let results = document.getElementById("results");

    //Create a for-loop where we create a variable of index which is defined as the value of zero. As long as the value of index is less than the length of the array "displayArray", add one to the value of index 
    for (let index = 0; index < displayArray.length; index++) {
        
        //Within the scope of the for statement create a variable of div which is defined as the value of the created document element "div"
        let div = document.createElement("div");

        //The created variable div contains inner HTML which is defined as the value of the index of the array "displayArray"
        div.innerHTML = displayArray[index];

        //Create a variable of currentNumbers which is defined as the value of the index of the array "displayArary"
        let currentNumbers = displayArray[index];

        /*Create an if-else statement where if the value of the variable currentNumbers is a modulous of two (divisible by two)*/
        if (currentNumbers % 2===0 ) {

            /*Within the scope block of the if-statement add the text string "even" to the class of the div variable*/
            div.classList.add("even");
            
            /*If not*/
            } else {

            /*Within the scope black of the if statement add the text string "odd" to the class of the div variable*/
            div.classList.add("odd");                
            }

        /*Add the text string "col" to the scope block to the class of the div variable*/
        div.classList.add("col");

        //append the value of the div variable to the results variable
        results.appendChild(div);

    }

}