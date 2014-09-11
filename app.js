$(document).ready(function() {
	$("form").submit(function() {
		
	});
	$("#name").keyup(function() {
		$("#nameOutput").html($(this).val());
	});
	$("#email").keyup(function() {
		$("#emailOutput").html($(this).val());
	});
});