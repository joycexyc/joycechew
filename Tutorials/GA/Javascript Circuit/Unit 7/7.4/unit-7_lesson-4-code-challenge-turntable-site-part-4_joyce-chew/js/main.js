

// Write Code for Step 1 here
$('#writeComment').on('click', function(e) {
	e.preventDefault();
	$('#commentForm').slideToggle(300);
});
// Code for Step 2
$('#commentList').on('click', '.delete', function () {
$(this).parent().fadeOut(300, function () {
 		$(this).remove();
 	});
});


// Write Code for Steps 3 and 4 Here
$('.open-modal').on('click', function(e) {
	e.preventDefault();
	$('.modal').fadeIn('300');

});

$('.close-modal').on('click', function() {

	$('.modal').slideUp(-300);
});