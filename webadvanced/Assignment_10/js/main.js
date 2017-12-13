/*--------------------- Finland RSS Feed ---------------------*/

$(document).ready(function () {

	var statement = "select * from feed where url='http://www.visitfinland.com/feed/'"; // here you link the url you need
	$.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

		for (var i = 0; i < data.query.results.item.length; i++) { // for each result:

			console.log(data.query.results.item[i]) // console log the result's object

			//var description = data.query.results.item[i].description;

			// description.replace("src=")


			//$("#nasa").append("<h2>" + data.query.results.item[i].title + "</h2><h3>" + data.query.results.item[i].pubDate + "</h3><p>" + data.query.results.item[i].description + "</p>")


			var publishDate = data.query.results.item[i].pubDate.replace("+0000", "") //replaces +0000 with no 0000


			$("#nasa").append("<div class='finland-item'><h2>" + data.query.results.item[i].title + "</h2><h3>" + publishDate + "</h3><p>" + data.query.results.item[i].description + "</p></div>")

		}

	});

});


/*------------------- Yahoo Weather API ----------------------*/

$(document).ready(function () {
	var city = "Helsinki";
	var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'"

	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (data) {
		console.log(data);
		$('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°F");
	});
});


