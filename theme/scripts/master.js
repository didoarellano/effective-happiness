
var icode = (function() {
	'use strict';

	function init() {
		$(document).on('click', '.play-video', function(e){
			e.preventDefault();
			$('#video-player').append('<iframe src="https://www.youtube.com/embed/nKIu9yen5nc?autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
		});
		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});
	}

	if($('#image-preview').length > 0) {
		$.ajax({
	        type:'GET',
	        url: 'http://vimeo.com/api/v2/video/60767036.json',
	        jsonp: 'callback',
	        dataType: 'jsonp',
	        success: function(data){
	            var thumbnail_src = data[0].thumbnail_large;
	            $('#image-preview').append('<img src="' + thumbnail_src + '"/>');
	        }
	    });
	}

	if($('#image-preview-1').length > 0) {
	    $('#image-preview-1').append('<img src="https://img.youtube.com/vi/dNo_BVzNb28/maxresdefault.jpg"/>');
	}
	if($('#image-preview-2').length > 0) {
	    $('#image-preview-2').append('<img src="https://img.youtube.com/vi/QvyTEx1wyOY/maxresdefault.jpg"/>');
	}

	return {
		init: init
	};
}());

jQuery(document).ready(function($) { icode.init(); });
