$('button').on('click', function () {

	// Add your code here!

	// Step 1: Add the party class to the .square
$('.square').addClass('party');
	// Step 2: Use the .attr() method to update the src of the image to 'images/cat.jpeg'
$('img').attr('src','images/cat.jpeg');

	// Step 3: Change the HTML for the h1 to "Having fun!" using the .html() method.
$('h1').html('Having fun!')

	// Step 4: Prepend the following paragraph to the body element:
	//    '<p>Done and Done!</p>'
$('body').Prepend('<p>Done and Done!</p>');

});