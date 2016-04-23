(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

    $(document).ready(function(){
      $('.slider').slider({
		full_width: true, 
		height:550,
		});
	  $('.modal-trigger').leanModal();
    });

