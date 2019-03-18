
//STEP 6 function
function updateCount() {
// count how many items don't have the .packed class
	var itemsLeft = $('#packingList li').not('.packed').length;
	
	 /*var itemText = itemsToPack === 1 ? itemsLeft + " item" : itemsLeft + " items";
    $('#itemSummary span').html(itemText);
	*/
// update text in #itemSummary to show 'You have <span>X items</span> left to pack.'' or item if count is 1

	if (itemsLeft === 1) {
		$('#itemSummary span').html(itemsLeft + ' item');
	} else { 
		$('#itemSummary span').html(itemsLeft + ' items');
	}  

/* alternative to above is ternary statement followed by using ternary variable in selector 
	var itemText = (itemsLeft > 1) ? itemsLeft + " items" : itemsLeft + " item";
	$('#itemSummary span').html(itemText);*/






// find out how many items in list packed and unpacked - total in packing list.
	var totalItems = $('#packingList li').length;
// if there are any items in list, fade in the buttons inside of #itemSummary. If not, fade the buttons out.
	if (totalItems > 0) {
		$('#itemSummary button').fadeIn();
		} else {
			$('#itemSummary button').fadeOut();
	}
}


// call this function within related events
/* Run so that the text will be updated when the user submits an initial task, marks an item as packed or removes an item.  */


//STEP 1
$('#packingForm').on('submit', function(e) {
e.preventDefault();
	// Get value user typed in field
		// Select input box and store as variable once add item button is clicked
var addItem = $('#newItemDescription').val();

// Clear input field for new item
$('#newItemDescription').val('');

// Add task to end of packing list
$('#packingList').append('<li><input type="checkbox"><span class="item">' + addItem + '</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a></li>');

// Step 6: run updatecount
updateCount();
});


//STEP 2
// Select checkbox element 
// Toggle on change of checkbox element to toggleClass

$('#packingList').on('change', 'input[type="checkbox"]', function() {
	$(this).closest('li').toggleClass('packed');
	updateCount();
}); 

//STEP 3
// Select remove anchor through event delegation and make click event listener
// use prevent default
// use remove() for $(this);

$('#packingList').on('click', '.remove', function(e) {
	e.preventDefault();
	$(this).closest('li').remove();
	updateCount();
});


//STEP 4
// Select edit anchor through event delegation make click event listener
// prevent default for anchor
// make text in clicked li a variable
// select inner HTML and input form + variable for item to edit
$('#packingList').on('click', '.edit', function(e) {
	e.preventDefault();
	var itemToEdit = $(this).siblings('.item').text();
	$(this).parent().html('<form id="editor"><input type="text" value="' + itemToEdit + '"><button type="submit" class="btn">Save</button></form>');
});

//STEP 5
// Select submit form through event delegation in #packingList
// Select value in the input form and store as variable
// Select the list item and replace value with the variable
$('#packingList').on('submit', '#editor', function(e) {
	e.preventDefault();
	var editedItem = $(this).find('input').val(); 
	$(this).parent().html('<input type="checkbox"><span class="item">' + editedItem + '</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a>');
});

//STEP 6
// Code function on top

//STEP 7
// Delete button and run updateCount function
$('#deleteItems').on('click', function() {
	$('#packingList').empty();
	updateCount();
});

//STEP 8 
// Select clearpacked button click
// Select items which have the packed class
// Remove items with the packed class

$('#clearPacked').on('click', function(){
	$('.packed').remove();
	updateCount();

});