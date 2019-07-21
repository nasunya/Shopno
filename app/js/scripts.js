	//= parts/jquery.v3.3.1.js
	//= parts/bootstrap.min.js
	//= parts/jquery.fancybox.min.js
	//= parts/jquery.validate.min.js
	//= parts/jquery.maskedinput.min.js
	//= parts/owl.carousel.min.js
	//= parts/select2.min.js
	
$(document).ready(function () {

	var showModule = $(".servis__button");
	for (var i = 0; i < showModule.length; i++) {
		console.log(showModule[i]);
		showModule[i].onclick = function(e) {
			var parElem = this.closest(".servis__container");  // closest
	    	parElem.classList.toggle("open");
	    };
	};

	$('.owl-carousel').owlCarousel({
		loop      : false,
		margin    : 10,
		nav       : true,
		responsive: {
			0:{
				items: 1
			},
			600:{
				items: 1
			},
			1000:{
				items: 1
			}
		}
	});

}); 



