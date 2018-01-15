
var cities = [ "Chicago","London", "Managua"];
//testing link up
console.log(cities[0]);
//console.log(response.data);
buttons()

var still = [];
var animated = [];
buttons()


function buttons() {

$("#city-buttons").empty();
for ( var i = 0; i < cities.length; i++){

	var newbutton = $("<button>");
	newbutton.addClass("city");
	newbutton.text(cities[i]);
	newbutton.attr("city-data", cities[i]);
	
	$("#city-buttons").append(newbutton);}
}


$("#add-city").on("click", function(event) {
        event.preventDefault();
        
        var city = $("#city-input").val().trim();

        
        cities.push(city);
        $("#city-input").val("");

        
        buttons();


} );

function giPhy() {

var giphy = $(this).attr("city-data");
var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=telbJddYkKRZ7LxKrkleNz0JWL9i45Gm&q=" + giPhy +"&limit=10"

$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {$("#cities-view").html(JSON.stringify(response));



        


})}
        $("#city-buttons").on("click", (giPhy));
        buttons()

















