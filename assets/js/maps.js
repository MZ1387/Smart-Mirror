window.onload = start;

var platform = new H.service.Platform({
  'app_id': '4aSOFHFXPy8Pqn1TRw8r',
    'app_code': '0eLKKaGA8h0AqEvhjPBf0Q',
    'useHTTPS': true
});

var homeCoordinates, workCoordinates;
var work = localStorage.getItem("work");
var homeCoordinates, updateETA;

function start() {
    //change following addresses to make it work
  if(work === null) {
    work = prompt("Where do you work?");
    localStorage.setItem("work", work);
  }

  console.log("Work:" , work);
  getLocation();
  console.log("home:" , homeCoordinates);

  updateETA = setInterval(function() {
    calculateRouteFromAtoB(platform);
  }, 3000);
}

function geocode(platform, loc) {
  var geocoder = platform.getGeocodingService(),
    geocodingParameters = {
      searchText: loc,
        gen:9,
      jsonattributes : 1
    };

  geocoder.geocode(
    geocodingParameters,
    onSuccessGeocode,
    onError
  );
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function setPosition(position) {
    homeCoordinates = position.coords.latitude + "," + position.coords.longitude;
    geocode(platform, work);
}

function onSuccessGeocode(result) {
  var locations = result.response.view[0].result;
  var l = locations[0].location.navigationPosition[0];
  var x = l.latitude;
  var y = l.longitude;
  var coor = x + "," + y;
  // console.log(coor);

  workCoordinates = coor;
}

function calculateRouteFromAtoB (platform) {
  // console.log(workCoordinates + " " + homeCoordinates);
  var router = platform.getRoutingService(),
    routeRequestParams = {
        'metricSystem' : 'imperial',
      mode: 'fastest;car;traffic:enabled',
      representation: 'display',
      routeattributes : 'waypoints,summary,shape,legs',
      maneuverattributes: 'direction,action',
      waypoint0: homeCoordinates, // replace with '52.5160,13.3779'
      waypoint1: workCoordinates  // replace with '52'5206,13.3862' and this works
    };

  router.calculateRoute(
    routeRequestParams,
    onSuccess,
    onError
  );
}

function onSuccess(result) {
  // console.log(result);
  var route = result.response.route[0];
  console.log(route.summary);

  var travelTime = route.summary.travelTime;
  var hr, min , sec;
  var msg =  "";

    console.log(Math.floor(travelTime/60));
  if(Math.floor(travelTime/60) > 60) {
      hr = Math.floor(travelTime/(60*60));
      min = Math.floor(travelTime/60) - (hr * 60);
      sec = travelTime % 60;
      msg = hr + ' hour, ' + min + ' minutes & ' + sec + ' seconds.';
  } else {
      min = Math.floor(travelTime/60);
      sec = travelTime % 60;
      msg = min + ' minutes & ' + sec + ' seconds.';
  }

  console.log(route.summary.text);

  var etaH = $("<h4>").text("Estimate time to work:").attr("class", "text-center");
  var timeH = $("<h4>").text(msg).attr("class", "text-center");

  $("#eta").append(etaH);
  $("#eta").append(timeH);

  // $("#eta").html("Estimate time to work: " + msg);
}

function onError(error) {
  alert('Ooops!');
}
