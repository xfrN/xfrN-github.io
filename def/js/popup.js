$(document).ready(function($){
			//open popup
			$('.link__reg').on('click', function(e){
				e.preventDefault();
				$('.header').toggleClass('header--fixed');
				if ( $('.popup--active').length ) {
					$('.popup--active').removeClass('popup--active');
				}
				else {
					$('.popup--avtorization').toggleClass('popup--active');
				}
			});
			/* BEGIN signIn */
			$('.popup__submit--signIn').on('click', function(e){
				e.preventDefault();
				$('.popup--avtorization').removeClass('popup--active');
				$('.popup--signIn').toggleClass('popup--active');
			});
			$('.popup__link--forgotPass').on('click', function(e){
				e.preventDefault();
				$('.popup--signIn').removeClass('popup--active');
				$('.popup--forgotPass').toggleClass('popup--active');
			});
			$('.popup__submit--next').on('click', function(e){
				e.preventDefault();
				$('.popup--forgotPass').removeClass('popup--active');
				$('.popup--confOnEmail').toggleClass('popup--active');
			});
			/* END signIn */
			
			/* BEGIN signUp */
			$('.popup__submit--signUp').on('click', function(e){
				e.preventDefault();
				$('.popup--avtorization').removeClass('popup--active');
				$('.popup--signUpStep1').toggleClass('popup--active');
			});
			$('.popup__submit--signUpStp2').on('click', function(e){
				e.preventDefault();
				$('.popup--signUpStep1').removeClass('popup--active');
				$('.popup--signUpStep2').toggleClass('popup--active');
			});
			$('.popup__submit--signUpStp3').on('click', function(e){
				e.preventDefault();
				$('.popup--signUpStep2').removeClass('popup--active');
				$('.popup--signUpStep3').toggleClass('popup--active');
			});
			$('.popup__submit--entrance').on('click', function(e){
				e.preventDefault();
				$('.popup--signUpStep3').removeClass('popup--active');
				$('.popup--signUpSuc').toggleClass('popup--active');
			});
			/* END signUp */

			//close popup
			$('.popup').on('click', function(e){
				if( $(e.target).is('.popup--close') || $(e.target).is('.popup') ) {
					e.preventDefault();
					$(this).removeClass('popup--active');
				}
			});

			if($('.popup--signIn').hasClass('popup--active')){
				$('.link__reg').click(function(){
					$('.popup--signIn').removeClass('popup--active');
				});
			}



		});