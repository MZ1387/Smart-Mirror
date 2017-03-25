var weatherAPIKey = "991cb9d2810d9a48e4c02d8cee500cdc";
var lat;
var lon;
var timeInSeconds;
var homeCoordinates = lat + "," +lon;

$(document).ready(function(){
 getCoordinates();
timer = setInterval(function() {
   timeInSeconds--;
  // console.log(timeInSeconds);
   if (timeInSeconds < 0) {
     getCoordinates();
   }
 }, 60*1000*5);

});
function getCoordinates () {
 $.getJSON('https://ipinfo.io', function(data){
 // console.log(data.loc);
 lat=data.loc.substr(0,data.loc.indexOf(","));
 lon=data.loc.substr(data.loc.indexOf(",")+1);
 // console.log(lat);
 // console.log(lon);
 // console.log(lat+lon);
}).done(function getWeather(){
 var weatherqueryURL = "https://api.darksky.net/forecast/" + weatherAPIKey + "/" + lat + "," + lon;
   $.ajax({
     url: weatherqueryURL,
     method: "GET"
   }).done(function(response) {
     // console.log(weatherqueryURL);
     // console.log(response.currently.summary);
     $(".current-temp").html(Math.floor(response.currently.temperature) + "° " + response.currently.summary);
     // $(".current-tempIcon").html(response.currently.summary);
     timeInSeconds=60;
     
   });  
   });
}