//sticky  menu

var posMenu = $(".menu").offset().top;
var $menu = $('.menu');
//var $nav= $('nav').height();

//console.log($nav)
$(window).scroll(function(){
    
	if ($(this).scrollTop()>= posMenu ) {
        $menu.addClass('fixed');
        $("#home").css({paddingTop : 80});
    }
    else {
        $menu.removeClass('fixed');
        $("#home").css({paddingTop : 30});
    }
    //scroll spy
    var scrollIn = $(window).scrollTop();
    var wHeight = $(document).height();
    var scrollEnd = scrollIn + $(window).height();
    var $about = $('a[href="#aboutMe"]');
  
     
     $('div[id]').each(function(){
      if(scrollIn > $(this).offset().top-50){
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


