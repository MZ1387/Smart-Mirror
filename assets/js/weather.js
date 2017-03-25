var weatherAPIKey = "991cb9d2810d9a48e4c02d8cee500cdc";
var lat = 34.1466;
var lon = -118.4669;
var timeInSeconds;
var homeCoordinates = lat + "," +lon;

$(document).ready(function(){
  getWeather();
 timer = setInterval(function() {
    timeInSeconds--;
   // console.log(timeInSeconds);
    if (timeInSeconds < 0) {
      getWeather();
    }
  }, 1000); 

});
function getWeather(){
  var weatherqueryURL = "https://api.darksky.net/forecast/" + weatherAPIKey + "/" + lat + "," + lon;
    $.ajax({
      url: weatherqueryURL,
      method: "GET"
    }).done(function(response) {
      console.log(weatherqueryURL);
      console.log(response);
      $(".current-temp").html(Math.floor(response.currently.temperature) + "° " + response.currently.summary);
      // $(".current-tempIcon").html(response.currently.summary);
      timeInSeconds=60;
      
    });   
    };