var weatherAPIKey = "43e2af7f1c74645ee13c542dce25d963";
var lat;
var lon;
var timeInSeconds;

$(document).ready(function(){
  getCoordinates();
 timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      getCoordinates();
    }
  }, 1000); 

});
function getCoordinates () {
  $.getJSON('http://ipinfo.io', function(data){
  console.log(data.loc);
  lat=data.loc.substr(0,data.loc.indexOf(","));
  lon=data.loc.substr(data.loc.indexOf(",")+1);
  console.log(lat);
  console.log(lon);
  console.log(lat+lon);
}).done(function getWeather(){
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
    });
}