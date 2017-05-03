/* BEGIN slider */
		$('.owl-carousel.owl-carousel--slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				0:{
					items: 1,
					margin: 0,
					center: true
				},
				480:{
					items: 2
				}
			}
		})

		$('.owl-carousel.owl-carousel--tab').owlCarousel({
			loop:false,
			autoWidth:true,
			margin: 0,
			nav: false,
			dots: false

			
		})
		/* END slider */