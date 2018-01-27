"use strict";

var x = document.getElementsByClassName("stuck");
/*"stuck"(class name) is a Node type..Need to loop overall the element and 
attach the listener to each one in the list */
Array.from(x).forEach(function(xx){
xx.addEventListener("click",function(stk){
	stk.preventDefault();
	alert("This page is unavailabele... Thank you!!!");
});
});