// Selecting elements
var inputitem = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var box = document.getElementById('box'); // Select the #box element

// Event listeners
inputitem.addEventListener('keyup', runevent);
box.addEventListener('mousemove', runevent1);

// Function for 'keyup' event on the input field
function runevent(e) {
    console.log('Event type:' + e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
}

// Event listener for the submit button
var hello = document.querySelector('input[type="submit"]');
hello.addEventListener('click', runevent2);

// Function for 'click' event on submit button
function runevent2(e) {
    e.preventDefault(); // Prevent form submission
    document.body.style.backgroundColor = "rgb(55,35,2)";
}

// Function for 'mousemove' event on #box
function runevent1(e) {
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
