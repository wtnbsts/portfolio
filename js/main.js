$(function() {

	const menu = $('.navigator');

	var pictBottom;
	$(window).scroll(function() {
		pictBottom = $('#pict').height();
		if($(window).scrollTop() > pictBottom) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');
		}
	});

	$('li.sub_menu').on({
		'mouseover' : function() {
			$('ul.menu_second').stop().slideDown('fast');
		},
		'mouseout' : function() {
			$('ul.menu_second').stop().slideUp('fast');
		}
	});

	$('#nav_self').on({
	    'click': function() {
	        $('#contents').load("home.html", function(response, status, xhr) {
			});
	    }
	});
	$('#nav_skill').on({
	    'click': function() {
	        $('#contents').load("skill.html", function(response, status, xhr) {
				$('html, body').scrollTop(0);
	        });
	    }
	});
	$('#project').on({
	    'click': function() {
			$('#contents').load("jisseki_project.html", function(response, status, xhr) {
				$('html, body').scrollTop(0);
			});
		}
	});
	$('#quality').on({
	    'click': function() {
			$('#contents').load("jisseki_quality.html", function(response, status, xhr) {
				$('html, body').scrollTop(0);
			});
		}
	});

	$('#nav_vision').on({
	    'click': function() {
			$('#contents').load("vision.html", function(response, status, xhr) {
				$('html, body').scrollTop(0);
			});
		}
	});

	$('#nav_self').trigger('click');

});