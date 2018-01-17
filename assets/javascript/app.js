
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
	newbutton.attr("data-city", cities[i]);
	
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

var giphy = $(this).attr("data-city");
var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=telbJddYkKRZ7LxKrkleNz0JWL9i45Gm&q="+ giphy + "&limit=10"
console.log(queryURL);
$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	//$("#cities-view").html(JSON.stringify(response));
for ( var i = 0; i < response.data.length; i++)

{ var cityDiv = $("<div>");
var url = response.data[i].images.fixed_height.url;
var cityImage = $("<img>");
cityImage.attr("src", url );
cityDiv.append(cityImage);
$("#cities-view").append(cityDiv);
console.log(response);

}



var giph = $("<img>").attr("src", url);
$("#cities-view").append(url);
console.log(url);
console.log(giphy);



        


})}
        $(document).on("click", ".city", (giPhy));
        buttons()

















