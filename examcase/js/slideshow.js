// JavaScript Document
//Source: www.w3schools.com/w3css/w3css_slideshow.asp    


//set the slideIndex to 1. (First picture)
var slideIndex = 1;
showDivs(slideIndex);
//Then call showDivs() to display the first image
//The plusDivs() function subtracts one or  adds one to the slideIndex
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myslidesstories");
	//If the slideIndex is less than 1 it is set to number of elements (x.length)
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
		//The showDiv() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex
		//If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; 
}
 