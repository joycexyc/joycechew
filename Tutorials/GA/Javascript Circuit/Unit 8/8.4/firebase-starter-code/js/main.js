// 1. Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAj3v6aTkbJhqBYyf2SZNlXxhcdpbRX2Hc",
    authDomain: "joyce-js-circuits.firebaseapp.com",
    databaseURL: "https://joyce-js-circuits.firebaseio.com",
    projectId: "joyce-js-circuits",
    storageBucket: "joyce-js-circuits.appspot.com",
    messagingSenderId: "985066611155"
  };
  firebase.initializeApp(config);


// 2. Connect to your Firebase application using your reference URL
var database = firebase.database();

$('#comment-form').on('submit', function (e) {
  // By default, a form submit reloads the DOM which will subsequently reload all our JS
  // To avoid this, we use preventDefault()
  e.preventDefault();

  // Grab user's comment from input field
  var userInput = $('#comment').val();

  // Clear the user's comment from the input (for UX purposes)
  $('#comment').val('')

  // Create a section for comments data in your db
  var commentsReference = database.ref('comments');

  // Use the set method to save data to the comments
 commentsReference.push({
    comment: userInput,
    likes: 0
  });
});



// 3. Retrieve comments data when page loads and when comments are added/updated
function getComments() {

  // Use reference to database to listen for changes in comments data
  database.ref('comments').on('value', function (results) {

    // Get all comments stored in the results we received back from Firebase
    var allComments = results.val();

    // Set an empty array where we can add new comment element
    var comments = [];

    // Iterate (loop) through all comments coming from database call
    for (var item in allComments) {

      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        comment: allComments[item].comment,
        likes: allComments[item].likes,
        commentId: item
      };
      // Get the HTML from our Handlebars comment template
      var source = $("#comment-template").html();

      // Compile our Handlebars template
      var template = Handlebars.compile(source);

      // Pass the data for this comment (context) into the template
      var commentListElement = template(context);

      // Push newly created element to array of comments
      comments.push(commentListElement)
    } 
    // Remove all list items from DOM before appending list items
    $('.comments').empty()

    // Append each comment to the list of comments in the DOM
 for (var i in comments) {
      $('.comments').append(comments[i])
    }

  });
}

// 4). When page loads, get comments
getComments();

// 5). Click event to delete comments
$('.comments').on('click', '.delete', function (e) {
  // Find comment whose objectId is equal to the id we're searching with
 var id = $(e.target).parent().data('id');
  var commentReference = database.ref('comments/' + id);
   commentReference.remove();
});


// 6). Click event to like comments
$('.comments').on('click', '.like', function (e) {
  // Find comment whose objectId is equal to the id we're searching with
  var id = $(e.target).parent().data('id');
  var commentReference = database.ref('comments/' + id);

  // Get number of likes from HTML
  var likes = $('#likes').html();

  // Convert likes to a number and add a like
  likes = parseInt(likes, 10) + 1;

  // Update likes property in database
  commentReference.update({
  likes: likes
  });

});
