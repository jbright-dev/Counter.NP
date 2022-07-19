//Controller Function//
function getNumbers(){

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse our numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        let numbers = generateNumbers(startValue,endValue);

        displayValues(numbers);//numbers is passed into displayValues

    }else{
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

function generateNumbers(start, stop){
    let numbers = [];

    for (let i = start; i <= stop; i++){
        numbers.push(i);
        numbers.reverse;
                
    }

    return numbers;

}


//View Function
//display the list of numbers; Should Bold and Blue Even Numbers
//Should Italicize and Red Odd Numbers
function displayValues(numbersArray){
    //my template
    //<div class="col">1</div>//
    
    //get results element
    let results = document.getElementById("results");

    //for loop
    for (let index = 0; index < numbersArray.length; index++) {
        
        //create div tag; add class; insert value; pin to page
        let div = document.createElement("div");

        //gets the value in the array at the current index
        div.innerHTML = numbersArray[index];

        //define the variable current Numbers as numbersArray[index];
        let currentNumbers = numbersArray[index];

        /*If the varialbe currentNumbers is a modulous of two add the even class
        if not add the odd class */
        if (currentNumbers % 2===0 ) {
            div.classList.add("even");            
            } else {
            div.classList.add("odd");                
            }

        //add the class to the div
        div.classList.add("col");

        //if number is odd
        div.classList.add("odd");

        //append to the page
        results.appendChild(div);

    }

}


/*Solution Pseudocode

Define The Controller Function
    Create a function named getNumbers where-(){
        
        The variable startValue is defined as the value of the input of the element posessing an
        id of startValue, which is found within the html document;

        The variable stopValue is defined as the value of the input of the element posessing an
        id of stopValue, which is found within the html document;
        
        Create an if where, using the  */