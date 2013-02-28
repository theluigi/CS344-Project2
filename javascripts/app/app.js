var main = function() {
	var track1;
	var track2;
	var count1;
	var count2;
	var twit = new ctwitter.CTwitter();
	$("#termsButton").click(function() {
		track1 = $("#term1").val();
		track2 = $("#term2").val();
		$("#searchForm").hide(); 
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
