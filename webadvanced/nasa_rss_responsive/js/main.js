$(document).ready(function(){

	var statement = "select * from feed where url='https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss'"; // here you link the url you need
        $.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

          $("#nasa").append("<h1>NASA: Image of the Day RSS Feed</h1>") //append title of rss feed
            
            for (var i = 0; i < data.query.results.item.length; i++) { // for each result:
              
            console.log(data.query.results.item[i]) // console log the result's object

            $("#nasa").append( "<h2>" + data.query.results.item[i].title + "</h2><h3>" + data.query.results.item[i].pubDate + "</h3><p>" + data.query.results.item[i].description + "</p>")

            }

        });
 
      });