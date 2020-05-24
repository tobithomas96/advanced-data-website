<script>
				(function ($) {
			    	$.fn.clickToggle = function (func1, func2) {
			        	var funcs = [func1, func2];
			        	this.data('toggleclicked', 0);
			        	this.click(function () {
				            var data = $(this).data();
				            var tc = data.toggleclicked;
				            $.proxy(funcs[tc], this)();
				            data.toggleclicked = (tc + 1) % 2;
			        });
			        return this;
			    	};
				}(jQuery));

				$('#btnFrequency').on({
					'click': function(){
			  		$('#placeholder').attr('src', 'https://github.com/tobithomas96/twitterproject/blob/master/frequency.jpeg?raw=true');
			 	 }
				});

				$('#btnHashtags').on({
					'click': function(){
			  		$('#placeholder').attr('src', 'https://github.com/tobithomas96/twitterproject/blob/master/hashtags.jpeg?raw=true');
			  	}
				});

				$('#btnWordcloud').on({
					'click': function(){
			  		$('#placeholder').attr('src', 'https://github.com/tobithomas96/twitterproject/blob/master/wordcloud.jpeg?raw=true');
			 	 }
				});
			</script> 
		
