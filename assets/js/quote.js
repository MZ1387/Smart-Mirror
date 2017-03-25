$(function() {

  function getNewQuote() {

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {

        $("#newQuote").html(a[0].content + "<p>— " + a[0].title + "</p>")
        console.log(a[0].content);
        console.log(a[0].title);
        console.log("Quote works");

    });

  }

getNewQuote();
setInterval(getNewQuote, 60 * 1000);

});
