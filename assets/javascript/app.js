
var cities = [ "Chicago","London", "Managua"];

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
$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	//$("#cities-view").html(JSON.stringify(response));
for ( var i = 0; i < response.data.length; i++)

{ var cityDiv = $("<div  >");
// var stillDiv = $("<div>");
var url = response.data[i].images.fixed_height.url;
var stillg = response.data[i].images.fixed_height_still.url;

var cityImage = $("<img >" );

cityImage.attr("src",stillg);
 cityImage.attr("src", url );
cityImage.attr("data-still", stillg);
cityImage.attr("data-animate, url")
cityImage.attr("data-state" , "still")
cityImage.addClass("movingG grid");
// cityImage.addClass("stillG grid");
cityDiv.append(cityImage);
$("#cities-view").prepend(cityImage);
// var gstill = $("<img>");
// gstill.attr("data-state", still)
// cityDiv.append(gstill)
//  $("#cities-view").prepend(cityDiv);

}
});
}
$(document).on("click", ".city", (giPhy));
        buttons()
        event.preventDefault();

        $(document).on ("click", ".stillG",function(){
                var state=$(this).attr('data-state');
                var moving = $(this).attr('data-animate');
                var still = $(this).attr('data-still');
        
                if (state==="still"){
                        $(this).attr('src',moving);
                        $(this).attr('data-state','animate');
        
                }else{
        
                        $(this).attr('src',still);
                        $(this).attr('data-state','still');
                }
                
        })   
        $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 200,
                gutter:400,
                transitionDuration: '0.2',
                 stagger:30,
                
                
              }); 
        
              