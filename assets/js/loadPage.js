var loc = window.location.pathname;
var dir = loc.substring(loc.lastIndexOf('/') + 1, loc.lastIndexOf('.'));

function start() {
	var loaded = 0;
	var timer = setInterval(function() {

		if(loaded === 0) {
			$("#taskDiv").show();
			$("#emailDiv").hide();
			$("#quoteDiv").hide();
			$("#tickersDiv").hide();
			loaded = 1;
		}else if(loaded === 1) {
			$("#taskDiv").hide();
			$("#emailDiv").show();
			$("#quoteDiv").hide();
			$("#tickersDiv").hide();
			loaded = 2;
		} else if (loaded === 2) {
			$("#taskDiv").hide();
			$("#emailDiv").hide();
			$("#quoteDiv").show();
			$("#tickersDiv").hide();
			loaded = 3;
		} else if (loaded === 3) {
			$("#taskDiv").hide();
			$("#emailDiv").hide();
			$("#quoteDiv").hide();
			$("#tickersDiv").show();
			loaded = 0;
		} else {
			$("#taskDiv").show();
			$("#emailDiv").hide();
			$("#quoteDiv").hide();
			$("#tickersDiv").hide();
			loaded = 0;
		}
	}, 15000);
}
