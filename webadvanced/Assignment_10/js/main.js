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
		$('#temp').html("Current temperature in " + city + " is "+ data.query.results.channel.item.condition.temp + "°F ");
		
		if (data.query.results.channel.item.condition.temp > 0 && data.query.results.channel.item.condition.temp < 30) {	
			$("#rss-section").css("background-color", "#ebfaff");
			$(".bgimg-3").css("background-image", "url(img/stars.jpg");
		} else if (data.query.results.channel.item.condition.temp >= 30 && data.query.results.channel.item.condition.temp < 32) {
			$("#rss-section").css("background-color", "#e4e4e4");
			$(".bgimg-3").css("background-image", "url(img/weather-1.jpg");
		} else if (data.query.results.channel.item.condition.temp >= 32 && data.query.results.channel.item.condition.temp < 34) {
			$("#rss-section").css("background-color", "#fff7f8");
			$(".bgimg-3").css("background-image", "url(img/autumn.jpg");
		} else if (data.query.results.channel.item.condition.temp >= 34 && data.query.results.channel.item.condition.temp < 36) {
			$("#rss-section").css("background-color", "#eee8f3");
			$(".bgimg-3").css("background-image", "url(img/weather-pretty.jpg"); // changes the background of Weather image 
		} else if (data.query.results.channel.item.condition.temp >= 36 && data.query.results.channel.item.condition.temp < 38) {
			$("#rss-section").css("background-color", "#f6f0e8");
			$(".bgimg-3").css("background-image", "url(img/img/warm.jpg.jpg")
		} else if (data.query.results.channel.item.condition.temp >= 38 && data.query.results.channel.item.condition.temp < 40) {
			$("#rss-section").css("background-color", "#ffe9ec");
			$(".bgimg-3").css("background-image", "url(img/warmwarm.jpg")
		}

	});
	
	
});



// THIS WORKS
// else if (data.query.results.channel.item.condition.temp > 34 && data.query.results.channel.item.condition.temp < 36) {
		//	$("#rss-section").css("background-color", "#fff0f2");
		//	$(".bgimg-3").css("background-image", "url(img/weather-pretty.jpg");
