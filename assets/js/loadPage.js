var loc = window.location.pathname;
var dir = loc.substring(loc.lastIndexOf('/') + 1, loc.lastIndexOf('.'));

function start() {
	var timer = setInterval(function() {
		if(dir === "Smart-Mirror" || dir === undefined) {
			dir = "index";
		}
		if(dir === "index") {
			window.location.href = "email.html";
		} else if (dir === "email") {
			window.location.href = "tickers.html";
		} else if (dir === "tickers") {
			window.location.href = "quote.html";
		} else {
			window.location.href = "email.html";
		}
	}, 15000);
}
