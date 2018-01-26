"use strict";

$(document).ready(function(){
	$("a.stuck").click(function(){
		$(window).stop();
		window.alert("Unable to Enter this page.... Thank you!!!");
		return false;

	});
});