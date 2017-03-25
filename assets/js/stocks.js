var stockTickerAPIKey = "qthmb-eUgGQsGVNyxxPX";
var stockTicker1 = "https://www.quandl.com/api/v3/datasets/WIKI/AMD.json?api_key=" + stockTickerAPIKey;
var stockTicker2 = "https://www.quandl.com/api/v3/datasets/WIKI/YHOO.json?api_key=" + stockTickerAPIKey;
var stockTicker3 = "https://www.quandl.com/api/v3/datasets/WIKI/TWTR.json?api_key=" + stockTickerAPIKey;
var stockTicker4 = "https://www.quandl.com/api/v3/datasets/WIKI/SBUX.json?api_key=" + stockTickerAPIKey;

$.ajax({
      url: stockTicker1,
      method: "GET"
    }).done(function(response) {
    	console.log(response);
    	$("#stock1").html(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");
    });
$.getJSON(stockTicker2).done(function(response) {
	$("#stock2").html(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");
	});
$.getJSON(stockTicker3).done(function(response) {
	$("#stock3").html(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");
	});
$.getJSON(stockTicker4).done(function(response) {
	$("#stock4").html(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");
	});
