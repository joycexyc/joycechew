// it is convention to use all caps for constants
// constants are variables whose value are not expected to change, immutable
var OMDB_API_URL = 'https://www.omdbapi.com/?apikey=ef09b0cc';

function getOMDBResults(title) {
  if (title.length === 0) {
    $('#result').html('Please enter text into the search field');
  } else {
    $.get(
    	OMDB_API_URL + "&t=" + title,
		function(searchResult) {
          console.log(searchResult.Title);
          
          var stringOutput = 'No Results Found.';

if (searchResult.Response == "True") {
	stringOutput =  '<p>' + searchResult.Title + '<br>' + searchResult.Year + '<br>' + searchResult.Released + '<br>' + searchResult.Actors + '<br>' + '<img src="' + searchResult.Poster + '">' + '</p>';
}
 $('#result').html(stringOutput);
        });
  }
};

$('#searchBtn').on('click', function(e) {
  e.preventDefault();
  
  getOMDBResults($('#searchField').val());
});

