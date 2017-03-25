var loc = window.location.pathname;
var dir = loc.substring(loc.lastIndexOf('/') + 1, loc.lastIndexOf('.'));

function start() {
	var timer = setInterval(function() {
		if(dir === "Smart-Mirror" || dir === null) {
			dir = "index";
		}
		if(dir === "index") {
			window.location.href = "email.html";
		} else if (dir === "email") {
			window.location.href = "tickers.html";
		} else if (dir === "tickers") {
			window.location.href = "quote.html";
		} else {
			window.location.href = "index.html";
		}
	}, 15000);
}
