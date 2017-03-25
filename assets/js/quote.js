$(document).ready(function() {

    function getNewQuote() {

        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {

            $("#newQuote").html(a[0].content + "<p>— " + a[0].title + "</p>")

        });

    };


    getNewQuote();

});












