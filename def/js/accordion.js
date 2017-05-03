$('.acc__heading').click(function(){
  $(this).next('.acc-content').toggleClass('open');
});


$('.tabs a').click(function(e){
  var $this = $(this);
  var $target = $( $this.attr('href') );
  e.preventDefault();

  if ( $this.hasClass('active') ) {
    $this.removeClass('active');  
    $target.siblings('.acc__heading').css('display', '');
    $target.next().removeClass('open');
    return;
  }

  $('.tabs a.active').click();

  $this.addClass( 'active' );
  $target.siblings('.acc__heading').css('display', 'none');
  $target.next().addClass('open');  
});