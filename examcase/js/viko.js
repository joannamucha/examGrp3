//click event on mobile version
//get the document ready and run the func when #burger in onClick
$(document).ready(function(){
    $("#burger").click(function(){
        $(".dropdown-content").toggle();
    });
	
	$(".modal").on("click", function() {
		$(this).fadeOut(1000);
		
	});
});

//code for providing the user with 'read more'
// Get the modal so it returns a collection of HTML elements 
var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal and get an array
var btn = document.getElementsByClassName("myButton");

// Get the <span> element that closes the modal as an array
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

} //closing the for loop 

//adding alert when subtim button pressed 

//getting the element to display
var textAlert = document.querySelector('.textAlert');

//function to show content of el
function myAlert() {
	alert(textAlert.textContent);
}

document.querySelector('.buttonSend').addEventListener('click', myAlert);