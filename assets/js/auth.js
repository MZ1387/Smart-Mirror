window.onload=start;
var google = new firebase.auth.GoogleAuthProvider();
google.addScope("https://www.googleapis.com/auth/plus.login");
google.addScope("https://www.googleapis.com/auth/calendar.readonly");
google.addScope("https://www.googleapis.com/auth/gmail.readonly");
google.addScope("https://www.googleapis.com/auth/user.addresses.read");

var gUser;
function start() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	$("#logCheck").html("Hello " + user.displayName);
	  	console.log(user);
		gUser = user;
	  } else {
	  	loginGoogle();
	  }
	});
}

function loginGoogle() {
	firebase.auth().signInWithRedirect(google);
	firebase.auth().getRedirectResult().then(function(result) {
		if(result.credential) {
			var token = result.credential.accessToken;
			$("#logCheck").html("logged in");
		}
		var gUser = result.user;
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
	firebase.auth().signOut().then(function() {
		location.reload();
	}).catch(function(error) {
	});
}