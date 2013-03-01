/*global $, jQuery*/
/*global ctwitter*/
/*global window*/
/*jslint browser:true */

(function () {
    "use strict";
    var $ = window.$,
        main = function () {
            $("#fittext").fitText(1.7, {minFontSize: '20px', maxFontSize: '50px'});
            $("#termsButton").click(function () {
                var track1, length = 0, count = 0, average = 0, twit = new ctwitter.CTwitter();
                track1 = $("#term1").val();
                $("#searchForm").hide();
                twit.stream("statuses/filter", { lang: 'en', track: track1}, function (stream) {
                    stream.on("data", function (tweet) {
                        //loads tweets
                        count = count + 1;
                        length = length + (tweet.text).length;
                        average = length / count;
                        average = Math.round(average);
                        $(".area").html("<h2> Term: " + track1 + "</h2>" +  "<h4> Number of tweets: " + count + "</h4>" + "<h4> Total length of tweets: " + length + "</h4>" + "<h4> Average tweet length: " + average + "</h4>");
                        $(".search").prepend("<p class='tweets'>" + tweet.text + "<p>").slideDown(100);
                        $('.search p:gt(30)').fadeOut(1000, function () {
                            $(this).remove();
                        });
                    });
                });
            });
        };
    $(document).ready(main);
}());


