var main = function() {
	var twit = new ctwitter.CTwitter();
	twit.stream("statuses/filter", { lang:'en', track:["jQuery tips"]}, function(stream) {
		stream.on("data", function(tweet) {
			//loads tweets
			$(".tweet").prepend("<p class='tweets'>" + tweet.text + "<p>").slideDown(100); 
			//counts number of current tweets, maintains 10
			$('.tweet p:gt(16)').fadeOut(1000, function() { 
				$(this).remove() 
			});
    });
  });  
}



$(document).ready(main); 
