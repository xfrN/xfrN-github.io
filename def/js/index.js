		//BEGIN toggle menu
		$('.toggleMenu').on('click', function(e){
			e.preventDefault();
			$('.menu-popup').toggleClass('menu--show');
			$('.header').toggleClass('header--fixed');

			//close popup
			$('.menu').on('click', function(e){
				if( $(e.target).is('.menu--close') || $(e.target).is('.menu') ) {
					e.preventDefault();
					$(this).removeClass('menu--active');
				}
			});
		});
		$(".toggleMenu").click(function () {
			$(this).toggleClass("toggleMenu--active");
		});
		
		//END toggle menu


		/* BEGIN sticky header */
		// $(document).ready(function(){
			
		// 	var target = document.querySelector('.header-bottom');
		// 	var origOffsetY = target.offsetTop;

		// 	function scroll () {
		// 		if ($(window).scrollTop() >= origOffsetY) {
		// 			$('.header-bottom').addClass('header--fixed');
		// 			$('.maint').addClass('header--fixed-padding');
		// 		} else {
		// 			$('.header-bottom').removeClass('header--fixed');
		// 			$('.main').removeClass('header--fixed-padding');
		// 		}  
		// 	}

		// 	document.onscroll = scroll;

		// });
		/* END sticky header */

		/* BEGIN show more */
		$(".link__readMore").on('click touchstart', function(event) {
			var txt = $(".more-content").is(':visible') ? ' Читать полностью':'Спрятать';
			$(this).parent().prev(".more-content").toggleClass("more-content--visible");
			$(this).html(txt);
			event.preventDefault();
		});
		$(".filter__link--showMore").on('click touchstart', function(event) {
			var txt = $(".filter-sub--more").is(':visible') ? ' Больше':'Спрятать';
			$(this).parent().prev(".filter-sub--more").toggleClass("filter-sub--visible");
			$(this).html(txt);
			event.preventDefault();
		});
		/* END show more */

/* BEGIN page bg shadow */
		$('.filter__toggle').click(function(){
			$(this).toggleClass('filter__toggle--active');
			$(this).next('.filter').toggleClass('filter--open');
			$('.popup-bg').hide();
			if($('.filter').hasClass('filter--open')){
				$('.popup-bg').show();
				$('.header').css('z-index', '5').css('position', 'relative');
			}
		});

		$('.popup-bg').click(function(){
			$(this).css('display', 'none');
			$('.filter').removeClass('filter--open');
		});
/* END page bg shadow */

				


