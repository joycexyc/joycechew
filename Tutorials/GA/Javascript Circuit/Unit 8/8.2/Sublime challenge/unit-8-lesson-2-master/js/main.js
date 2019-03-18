// Step 1: Write a GET request.
// We will be getting information on currency exchange rates from an open API.
// The url for the request is http://api.fixer.io/latest
// The documentation for this API, which contains an example of the response
// that the API returns, can be found here: http://fixer.io/

var endpoint = 'latest'
var accessKey = 'c546c8f622271a84d608862b617caf30';

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
	type: 'GET',
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + accessKey,   
    dataType: 'jsonp',
// Step 2: On success:
  // a) Log the response to the console. Open the console and expand the
  //    response object to see the information it holds. Look in the response
  //    for (1) the date that the exchange rate was last calculated, and (2) the
  //    value of a Euro in Dollars (USD) on that date.
  // b) Update the content of the h2 to say "As of YYYY-MM-DD", where
  //    "YYYY-MM-DD" is replaced with the date given in the response.
  // c) Update the content of the li to say "USD : X", where X is the EUR-USD
  //    exchange rate given in the response.

    success: function(response) {
   console.log(response.date + response.rates.USD);
   $('h2').html("As of " + response.date);
   $('li').html("USD: " + response.rates.USD);
  }
});




// my API access key: c546c8f622271a84d608862b617caf30
 // "latest" endpoint - request the most recent exchange rate data
 // https://fixer.io/quickstart
/* http://data.fixer.io/api/latest

    ? access_key = YOUR_ACCESS_KEY
    & base = GBP
    & symbols = USD,AUD,CAD,PLN,MXN

    http://data.fixer.io/api/latest?access_key=c546c8f622271a84d608862b617caf30&format=1

 */

// Joyce, click on the URL above to get the most recent exchange
// rates for USD, AUD, CAD, PLN and MXN