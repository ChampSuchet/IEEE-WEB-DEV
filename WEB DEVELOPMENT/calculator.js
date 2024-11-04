const display = document.getElementById("display");

// Function to add input to the display
function add(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {  // Renamed the function to avoid conflict
    display.value = "";
}

// Function to evaluate the result
function calculate() {
    try {
        display.value = eval(display.value);  // Calculate the expression
    } catch (error) {
        display.value = "error";  // Handle errors
    }
}
