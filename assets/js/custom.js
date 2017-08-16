$(document).ready(function() {
	function slideranimation() {
		$('.banner-section').removeClass('removeLoader');
		$('.banner-section').addClass('sliderActive');

		var timedelay = 6000;
		var currentIndex = 0,
		navItems = $('.nav li');

		function setSlide(index) {
			navItems.removeClass('selected');
			navItems.eq(index).addClass('selected');
			$('.slide').fadeOut(1500);
			$('.slide').removeClass('active-slide');
			$('.slide').eq(index).fadeIn(1000);
			$('.slide').eq(index).addClass('active-slide');
		}

		$('.nav li').click(function() {
			var index = $('.nav li').index($(this));
			currentIndex = index;
			setSlide(currentIndex);
		});

		/*
			function next() {
				if (currentIndex < (navItems.length - 1)) {
					currentIndex++;
					setSlide(currentIndex);
				}
			}

			$('.next').click(function() {
				next();
			});

			function prev() {
				if (currentIndex > 0) {
					currentIndex--;
					setSlide(currentIndex);
				}
			}

			$('.prev').click(function() {
				prev();
			}); 
		*/

		document.addEventListener('keydown', function(event) {
			if (event.keyCode == 39) {
				next();
			} else if (event.keyCode == 37){
				prev();
			}
		}, true);	

		function slide() {
			if (currentIndex < (navItems.length - 1)) {
				currentIndex++;
				setSlide(currentIndex);
			} else {
				currentIndex = 0;
				setSlide(currentIndex);
			}
		}

		var interval = setInterval(slide, timedelay);
	}

	setTimeout(slideranimation, 2000);	
});