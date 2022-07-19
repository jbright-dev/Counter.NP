//Controller Function//
function getNumbers(){

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse our numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        let numbers = generateNumbers(startValue,endValue);

        displayValues(numbers); //numbers is passed into displayValues

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

        //add the class to the div
        div.classList.add("col");

        //if number is ood
        div.classList.add("odd");

        //if number is even
        div.classList.add("even")

        //append to the page
        results.appendChild(div);
    }

}
