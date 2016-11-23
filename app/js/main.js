jQuery(document).ready(function(){


  //iPhone's Animation 
       // var iphone = $('#iphone');
       //  iphone.animate({
       //      left: '550px'
       //  }), 2500;


  //DIV's Hoising 
  var $slideAd = $('#slideAd');

  $(window).scroll(function() {
    $(".appearance").each(function(){
      var positionElements = $(this).offset().top;
      var windowTop = $(window).scrollTop();
        if (positionElements < windowTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
	

});


