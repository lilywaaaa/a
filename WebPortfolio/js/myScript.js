/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction () {
	var x = document.getElementById('myLinks');
	if (x.style.display === "block") {
		x.style.display = "none" 
	} else {
		x.style.display = "block"}
}


$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('.topnav'),
      headerWrapEl = $('.topnav'),
      navEl = $('#myLinks'),
      linkScroll = $('.scroll');
  
  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
});