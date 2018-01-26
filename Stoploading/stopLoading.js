"use strict";

$(document).ready(function(){
	$("a.stuck").click(function(stk){
		stk.preventDefault();
		alert("Unable to Enter this page.... Thank you!!!");
		return false;

	});
});