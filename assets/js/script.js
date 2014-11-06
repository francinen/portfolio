$(function(){

	$('li.portfolio').on('click',function(){
		$(this).addClass('open');
		$('section.open').slideToggle().removeClass('open');
		$('nav li.contact, nav li.about').removeClass('open');
	});
	$('li.about').on('click',function(){
		$(this).addClass('open');
		if ($('section.contact').hasClass('open')){
			$('section.contact').slideToggle().removeClass('open');
			$('section.about').slideDown().addClass('open');
			$('nav li.contact').removeClass('open');
		}else{
			$('section.about').slideDown().addClass('open');
			$('nav li.contact, nav li.portfolio').removeClass('open');
		}
	});
	$('li.contact').on('click',function(){
		$(this).addClass('open');
		if ($('section.about').hasClass('open')){
			$('section.about').slideToggle().removeClass('open');
			$('section.contact').slideDown().addClass('open');
			$('nav li.about').removeClass('open');
		}else{
			$('section.contact').slideDown().addClass('open');
			$('nav li.about, nav li.portfolio').removeClass('open');
		}
	});
});