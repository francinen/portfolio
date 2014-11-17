$(function(){
	$('.contact').delay(500).animate({'opacity':1,'top':'0'},1000);


	$(this).scroll(function(){
		var y = $(this).scrollTop();
		var skills = $('#mySkills').position();
		if (y >= (skills.top-600)) {
			$('div.mySkills,div.selfTaught,div.wantToLearn').animate({'opacity':1},1800);
			$('div.list ul').animate({'top':0, 'opacity':1},1000);
			}
		if (y >= (skills.top-200)) {
			$('.work').animate({'opacity':1},500);
			}

	});


	var randomNumber = function(n){
		return Math.floor(Math.random()*n);
	}
	var randomColour = function(options){
		return options[randomNumber(options.length)];
	}

	// create a helper tool to shuffle the array
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	setInterval(function(){
		var classes = ['green','orange','red','blue'];
		// shuffle the array and store it in order var
		var order = shuffle(classes);

		// loop though each surprise and assign it the nth colour
		$('.surprise').each(function(i,el) {
			$(this).removeClass('green orange red blue');
			$(this).addClass(order[i]);
		});

	},1800);

	$('.viewSite').click(function(){
		$('head').find('title').text('Take a look at my other projects');
	});


});