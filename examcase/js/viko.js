$(document).ready(function(){
    $("#burger").click(function(){
        $(".dropdown-content").toggle();
    });
});

//read more
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

//creating for loop in order to run trought each item in the array 
for (let i = 0; i < btn.length; i += 1) { 
// When the user clicks the button, open the modal 
btn[i].onclick = function() {
    modal[i].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[i].onclick = function() {
    modal[i].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal[i].style.display = "none";
    }
}
} //closing the for loop 