window.onload=start;
var google = new firebase.auth.GoogleAuthProvider();
google.addScope("https://www.googleapis.com/auth/calendar.readonly");
google.addScope("https://www.googleapis.com/auth/gmail.readonly");
google.addScope("https://www.googleapis.com/auth/user.addresses.read");


var gUser;
function start() {
	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
	  if (user) {
		gUser = user;
	  } else {
	    loginGoogle();
	  }
	});
}

function loginGoogle() {
	firebase.auth().signInWithPopup(google).then(function(result){
		if(result.credential) {
			var token = result.credential.accessToken;
		}
		gUser = result.user;
	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
	});
}

function signOut() {
	firebase.auth().signOut().then(function() {
	}).catch(function(error) {
	});
}