var main = function() {
	var track1;
	var track2;
	var count1 = 0;
	var count2 = 0;
	var twit = new ctwitter.CTwitter();
	$("#termsButton").click(function() {
		track1 = $("#term1").val();
		track2 = $("#term2").val();
		$("#searchForm").hide(); 
		$(".search1").append("<h2> Term 1: " + track1 + "</h2>" +  "<h2> Count: " + count1 + "</h2>");
		$(".search2").append("<h2> Term 2: " + track2 + "</h2>" +  "<h2> Count: " + count2 + "</h2>");
		
		twit.stream("statuses/filter", { lang:'en', track:track1}, function(stream) {
			stream.on("data", function(tweet) {
				//loads tweets
				$(".tweet").prepend("<p class='tweets'>" + tweet.text + "<p>").slideDown(100); 
				//counts number of current tweets, maintains 10
				$('.tweet p:gt(16)').fadeOut(1000, function() { 
					$(this).remove() 
				});
			});
		});  
		
		twit.stream("statuses/filter", { lang:'en', track:track2}, function(stream) {
			stream.on("data", function(tweet) {
				//loads tweets
				$(".tweet").prepend("<p class='tweets'>" + tweet.text + "<p>").slideDown(100); 
				//counts number of current tweets, maintains 10
				$('.tweet p:gt(16)').fadeOut(1000, function() { 
					$(this).remove() 
				});
			});
		});  
		
	});
}



$(document).ready(main); 
