
	


$(function(){
// Array of elements with class of surprise
// Array of possible classes
// Generate random colour
// Assign class based on random colour
// Colour can only be used ONCE
// Run an indefinite number of times

// var assignClass = function(){

// };

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
		// shuffl the array and store it in order var
		var order = shuffle(classes);

		// loop though each suprise and assign it the nth colour
		$('.surprise').each(function(i,el) {
			$(this).removeClass('green orange red blue');
			$(this).addClass(order[i]);
		});

	},1800);

	$('#offalDetails').click(function(){
		var x = $('#myWork').position();
		var y = $(window).scrollTop();
		$('#offalModal').height($(window).innerHeight()).css({'top':y}).fadeIn(500);
		$('body').disablescroll();
	});

	$('#masterDetails').click(function(){
		var x = $('#myWork').position();
		var y = $(window).scrollTop();
		$('#masterModal').height($(window).innerHeight()).css({'top':y}).fadeIn(500);
		$('body').disablescroll();
	});

	$('#stkrDetails').click(function(){
		var x = $('#myWork').position();
		var y = $(window).scrollTop();
		$('#stkrModal').height($(window).innerHeight()).css({'top':y}).fadeIn(500);
		$('body').disablescroll();
	});

	$('button.close').click(function(){
		$('.projectDetails').fadeOut(500);
		$('body').disablescroll('undo');
	});





	

	// var y = $(window).scrollTop();
	// var x = $('.mySkills').position();
	// if (y < x.top){


	// }



	// $('li.portfolio').on('click',function(){
	// 	$(this).addClass('open');
	// 	$('section.open').slideToggle().removeClass('open');
	// 	$('nav li.contact, nav li.about').removeClass('open');
	// });
	// $('li.about').on('click',function(){
	// 	$(this).addClass('open');
	// 	if ($('section.contact').hasClass('open')){
	// 		$('section.contact').slideToggle().removeClass('open');
	// 		$('section.about').slideDown().addClass('open');
	// 		$('nav li.contact').removeClass('open');
	// 	}else{
	// 		$('section.about').slideDown().addClass('open');
	// 		$('nav li.contact, nav li.portfolio').removeClass('open');
	// 	}
	// });
	// $('li.contact').on('click',function(){
	// 	$(this).addClass('open');
	// 	if ($('section.about').hasClass('open')){
	// 		$('section.about').slideToggle().removeClass('open');
	// 		$('section.contact').slideDown().addClass('open');
	// 		$('nav li.about').removeClass('open');
	// 	}else{
	// 		$('section.contact').slideDown().addClass('open');
	// 		$('nav li.about, nav li.portfolio').removeClass('open');
	// 	}
	// });
});