setTimeout(function(){
	$('.loader_bg').fadeToggle();
  }, 500);
  
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  $("#client-carousel").owlCarousel({
	pagination : false,
	center: true,
	loop:true,
	dots:false,
	margin:0,
	nav:false,
	autoplay:true,
	autoplayTimeout:2000,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
  });
  
  $("#testimonial-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	margin:0,
	nav:false,
	autoplay:true,
	autoplayTimeout:2000,
	responsive:{
		0:{
			items:1
		},
		800:{
			items:2
		},
		1000:{
			items:3
		}
	}
  });


  // Popup Video
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 100,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});
