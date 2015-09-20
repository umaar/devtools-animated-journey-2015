/*global Reveal */



(function() {
	'use strict';

function loadVideos(){
	$("video").each(function(index){
	$(this).get(0).load();
		$(this).get(0).addEventListener("canplaythrough", function(){
			this.play();
			this.pause();
		});
	});
}

$(loadVideos);

	function splat(elm) {
		var bounce = new Bounce();
		var delay = 1000;
		bounce
		  .translate({
		  	delay: delay + 0,
		    from: { x: -300, y: 0 },
		    to: { x: 0, y: 0 },
		    duration: 600,
		    stiffness: 4
		  })
		  .scale({
		    from: { x: 1, y: 1 },
		    to: { x: 0.1, y: 2.3 },
		    easing: "sway",
		    duration: 800,
		    delay: delay + 65,
		    stiffness: 2
		  })
		  .scale({
		    from: { x: 1, y: 1},
		    to: { x: 5, y: 1 },
		    easing: "sway",
		    duration: 300,
		    delay: delay + 30,
		  })
		  .applyTo(elm);
	}

	Reveal.addEventListener( 'slidechanged', function( event ) {
	    // console.log(event);
	    processSlide(event.currentSlide);
	});

	var slideActions = {
		'intro': {
			action: function(slide) {
				// splat(slide.querySelector('h1'));
			}
		}
	};

	function processSlide(slide) {
		var slideName = $(slide).parent().find('name');
		if (typeof slideActions[slideName] === 'object') {
			slideActions[slideName].action(slide);
		}
	}


	$(function() {

	});

}());