/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35; // initalize value to 35 to match with the state of full day in the begining.
let number_of_days = 0;
let total_cost = 0;

const mon_button_element = document.getElementById("monday");
const tue_button_element = document.getElementById("tuesday");
const wed_button_element = document.getElementById("wednesday");
const thu_button_element = document.getElementById("thursday");
const fri_button_element = document.getElementById("friday");


const full_day_span_element = document.getElementById("full");
const half_day_span_element = document.getElementById("half");

const clear_button_element =  document.getElementById("clear-button");
const calculated_cost_span_element = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handle_button (a_button) {
    if (a_button.classList.contains("clicked")){
        // if the button already has clicked class , do nothing.
        a_button.classList.remove("clicked");
        number_of_days = number_of_days - 1;
    }
    else {
        a_button.classList.add("clicked");
        number_of_days = number_of_days + 1;
    }
    recalculate();
}

mon_button_element.addEventListener('click', function() {
    handle_button(this);
});
tue_button_element.addEventListener('click', function() {
    handle_button(this);
});
wed_button_element.addEventListener('click', function() {
    handle_button(this);
});
thu_button_element.addEventListener('click', function() {
    handle_button(this);
});
fri_button_element.addEventListener('click', function() {
    handle_button(this);
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function reset_all(){
    mon_button_element.classList.remove("clicked");
    tue_button_element.classList.remove("clicked");
    wed_button_element.classList.remove("clicked");
    thu_button_element.classList.remove("clicked");
    fri_button_element.classList.remove("clicked");

    
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");

    cost_per_day = 35;  
    number_of_days = 0;  
    total_cost = 0;

    recalculate();  

 }

 clear_button_element.addEventListener('click', function() {
    reset_all();
    });



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day_span_element.addEventListener('click', function() {
    half_day_span_element.classList.add("clicked");
    full_day_span_element.classList.remove("clicked");
    cost_per_day = 20;
    recalculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_day_span_element.addEventListener('click', function() {
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");
    cost_per_day = 35;
    recalculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    total_cost = cost_per_day * number_of_days;             
    calculated_cost_span_element.innerText = total_cost;  }
