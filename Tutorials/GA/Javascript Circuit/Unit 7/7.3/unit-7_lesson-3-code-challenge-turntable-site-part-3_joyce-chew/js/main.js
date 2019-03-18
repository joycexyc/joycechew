$('form').on('submit', function(event) {
    event.preventDefault();

   var userComment = $('#comment').val(); 
           //Remove errors
           $('#comment').removeClass('error');
           $('.error-message').remove();

//error
 if  (userComment === "") {
        $('#comment').addClass('error');
        $('#comment').after('<p class="error-message">This field is required.</p>');
        } else {
 //Add non-blank comments to the comment list displayed
 $('#commentList').append('<li><p>' + userComment + '</p><i class="fa fa-trash-o delete"></i></li>');

        }

});

$('#commentList').on('click', '.delete', function() {

   $(this).parent('li').remove();

});



/* jQuery "submit" handler has not called "removeClass" with the argument "error" on the "input" element.
jQuery "submit" handler has not called "remove" on the "error-message" element.
jQuery "submit" handler has not called "after()" on the "comment" element with the correct text.
*/