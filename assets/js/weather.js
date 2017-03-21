var weatherAPIKey = "43e2af7f1c74645ee13c542dce25d963";
var gugleMapsAPIKey = "AIzaSyB3ysGtImhDzdADJxJNHh-SbWl_VJvZ-EU";
var lat=33.7866;
var lon=-118.2987;
var timeInSeconds;

$(document).ready(function(){
  getCoordinates();
  getWeather();
 timer = setInterval(function() {
    timeInSeconds--;
    console.log(timeInSeconds);
    if (timeInSeconds < 0) {
      getCoordinates();
      getWeather();
    }
  }, 1000); 

});

function getWeather(){
  var weatherqueryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + lat + "&lon=" + lon + "&APPID=" + weatherAPIKey;
    $.ajax({
      url: weatherqueryURL,
      method: "GET"
    }).done(function(response) {
      console.log(weatherqueryURL);
      console.log(response);
      $(".current-temp").html(Math.floor(response.main.temp) + "°");
      $(".current-tempIcon").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
      timeInSeconds=60;
      console.log(timeInSeconds);
    });   
    } 
function getCoordinates () {
  $.getJSON('http://ipinfo.io', function(data){
  console.log(data.loc);
  lat=data.loc.substr(0,data.loc.indexOf(","));
  lon=data.loc.substr(data.loc.indexOf(","));
});
}