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

	$('.phone').mask("+7 (999) 999-99-99", {
		autoclear: false
	});

	$(".signup").each(function () {
        $(this).validate({
            rules: {
                firstName: {
                    required: true

                },
                phone: {
                    required: true

                },
                email: {
                    required: true,
                },
            },
            messages: {
                firstName: {
                    required: ""

                },
                phone: {
                    required: ""

                },
                email: {
                    required: "",
                    
                },

            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url : "mail.php",
                    data: $(form).serialize()
                }).done(function () {
                	$.fancybox.open({
					  src : '#thx',
					  type: 'inline',

					  opts : {
					    onComplete : function() {
					    }
					  }
					});
                });
                return false;
            }
        });
	});	

}); //document



