$(function() {

	const menu = $('.navigator');
	const secondmenu = $('ul.menu_second');
	const contents = $('#contents');
	const body = $('html, body');
	const submenu = $('li.sub_menu');

	var pictBottom;
	$(window).scroll(function() {
		pictBottom = $('#pict').height();
		if($(window).scrollTop() > pictBottom) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');
		}
	});

	submenu.on({
		'mouseover' : function() {
			secondmenu.stop().slideDown('fast');
		},
		'mouseout' : function() {
			secondmenu.stop().slideUp('fast');
		}
	});

	$('#nav_self').on({
	    'click': function() {
	        contents.load("home.html", function(response, status, xhr) {
			});
	    }
	});
	$('#nav_skill').on({
	    'click': function() {
	        contents.load("skill.html", function(response, status, xhr) {
				body.scrollTop(0);
	        });
	    }
	});
	$('#project').on({
	    'click': function() {
			contents.load("jisseki_project.html", function(response, status, xhr) {
				body.scrollTop(0);
				submenu.mouseout();
			});
		}
	});
	$('#quality').on({
	    'click': function() {
			contents.load("jisseki_quality.html", function(response, status, xhr) {
				body.scrollTop(0);
				submenu.mouseout();
			});
		}
	});

	$('#nav_vision').on({
	    'click': function() {
			contents.load("vision.html", function(response, status, xhr) {
				body.scrollTop(0);
			});
		}
	});

	$('#nav_self').click();

});