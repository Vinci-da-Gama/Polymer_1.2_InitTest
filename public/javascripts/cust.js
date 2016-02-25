// jQuery Js Document
$(document).ready(function() {
	notice ();
	initWow ();
	alert(window.location);
});

function notice () {
	alert('pls, disable this function.');
}

function initWow () {
	new WOW().init();
}