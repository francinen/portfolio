$(function(){
	// Contact icons fade into view
	$('.contact').delay(500).animate({'opacity':1,'top':'0'},1000);

	// Scrolling effects
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

	// Header effects
	var randomNumber = function(n){
		return Math.floor(Math.random()*n);
	}
	var randomColour = function(options){
		return options[randomNumber(options.length)];
	}

	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	setInterval(function(){
		var classes = ['green','orange','red','blue'];
		var order = shuffle(classes);
		$('.surprise').each(function(i,el) {
			$(this).removeClass('green orange red blue');
			$(this).addClass(order[i]);
		});
	},1800);

});