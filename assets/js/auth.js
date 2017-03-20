// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4sIDrmu-pRTkiQM7oIZSXaadzSm_q6Kk",
    authDomain: "smart-mirror-a2978.firebaseapp.com",
    databaseURL: "https://smart-mirror-a2978.firebaseio.com",
    storageBucket: "smart-mirror-a2978.appspot.com",
    messagingSenderId: "993274322267"
};

var gUser;
var auth;
var database;
window.onload=start;
var google = new firebase.auth.GoogleAuthProvider();
google.addScope("https://www.googleapis.com/auth/plus.login");
google.addScope("https://www.googleapis.com/auth/calendar.readonly");
google.addScope("https://www.googleapis.com/auth/gmail.readonly");
google.addScope("https://www.googleapis.com/auth/gmail.metadata");
google.addScope("https://www.googleapis.com/auth/user.addresses.read");




function start() {

	firebase.initializeApp(config);
    database = firebase.database();
    auth = firebase.auth();

	auth.onAuthStateChanged(function(user) {
	  if (user) {
	  	$("#logCheck").html("Hello " + user.displayName);
	  	console.log(user);
		gUser = user;
	  } else {
	  	loginGoogle();
	  }
        loadModules();
	});
}

function loginGoogle() {
	auth.signInWithRedirect(google);
	auth.getRedirectResult().then(function(result) {
		if(result.credential) {
			var token = result.credential.accessToken;
			console.log("TOKEN", token);
			$("#logCheck").html("logged in");
		}
        console.log("Credential", result.credential);
		gUser = result.user;
		console.log(gUser);
	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
		console.log(error);
	})
}

function signOut() {
	auth.signOut().then(function() {
		location.reload();
	}).catch(function(error) {
	});
}

function loadModules() {
    listLabels();
}

$("#logOut").on("click", signOut);