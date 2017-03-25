var stockTickerAPIKey = "qthmb-eUgGQsGVNyxxPX";
var stockTicker1 = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=" + stockTickerAPIKey;
var stockTicker2 = "https://www.quandl.com/api/v3/datasets/WIKI/GOOG.json?api_key=" + stockTickerAPIKey;
var stockTicker3 = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?api_key=" + stockTickerAPIKey;
var stockTicker4 = "https://www.quandl.com/api/v3/datasets/WIKI/TSLA.json?api_key=" + stockTickerAPIKey;
var stockTicker5 = "https://www.quandl.com/api/v3/datasets/WIKI/TWTR.json?api_key=" + stockTickerAPIKey;
var stockTicker6 = "https://www.quandl.com/api/v3/datasets/WIKI/INTC.json?api_key=" + stockTickerAPIKey;
var stockTicker7 = "https://www.quandl.com/api/v3/datasets/WIKI/AMD.json?api_key=" + stockTickerAPIKey;
var stockTicker8 = "https://www.quandl.com/api/v3/datasets/WIKI/NVDA.json?api_key=" + stockTickerAPIKey;
var stockTicker9 = "https://www.quandl.com/api/v3/datasets/WIKI/YHOO.json?api_key=" + stockTickerAPIKey;
var stockTicker10 = "https://www.quandl.com/api/v3/datasets/WIKI/SBUX.json?api_key=" + stockTickerAPIKey;
$.ajax({
      url: stockTicker1,
      method: "GET"
    }).done(function(response) {
    	console.log(response);
    	$("#stock1").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");
    });
$.getJSON(stockTicker2).done(function(response) {
	$("#stock2").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker3).done(function(response) {
	$("#stock3").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker4).done(function(response) {
	$("#stock4").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker5).done(function(response) {
	$("#stock5").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker6).done(function(response) {
	$("#stock6").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker7).done(function(response) {
	$("#stock7").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker8).done(function(response) {
	$("#stock8").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker9).done(function(response) {
	$("#stock9").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
$.getJSON(stockTicker10).done(function(response) {
	$("#stock10").append(response.dataset.dataset_code + " " + response.dataset.data[0][4] + " ");	
	});
