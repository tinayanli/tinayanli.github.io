$(document).ready(function () {

	var statement = "select * from feed where url='http://www.visitfinland.com/feed/'"; // here you link the url you need
	$.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

		for (var i = 0; i < data.query.results.item.length; i++) { // for each result:

			console.log(data.query.results.item[i]) // console log the result's object

			//var description = data.query.results.item[i].description;

			// description.replace("src=")


			$("#nasa").append("<h2>" + data.query.results.item[i].title + "</h2><h3>" + data.query.results.item[i].pubDate + "</h3><p>" + data.query.results.item[i].description + "</p>")

		}

	});

});
