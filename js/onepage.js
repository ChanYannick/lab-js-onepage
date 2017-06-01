//sticky  menu

var posMenu = $(".menu").offset().top;
//var topHeight = $("#home").height();
var $menu = $('.menu');
$(window).scroll(function(){
    
	if ($(this).scrollTop() >= posMenu) {
        $menu.addClass('fixed');
    }
    else {
        $menu.removeClass('fixed');
    }
    //scroll spy
    var scrollTop = $(window).scrollTop();
    var wHeight = $(document).height();
    var scrollEnd = scrollTop + $(window).height();
    var $about = $('a[href="#aboutMe"]');
     $('div[id]').each(function(){
      if(scrollTop > $(this).offset().top){
        $("a.selected").removeClass("selected");      				
        //console.log("a[href='#"+$(this).attr("id")+"']");
       $("a[href='#"+$(this).attr("id")+"']").addClass("selected");	
      }
     });
      if(scrollEnd == wHeight){
         $('a[href="#download"]').removeClass("selected");	
         $about.addClass("selected");
         console.log(wHeight, scrollEnd);
      }   
})//window scroll end
// smooth scroll
$(".menu a").click(function(){

  var aSmooth = $(this).attr('href');
  console.log(aSmooth);

    $("html, body").animate({ scrollTop:$(aSmooth).offset().top }, "slow");

    
})


