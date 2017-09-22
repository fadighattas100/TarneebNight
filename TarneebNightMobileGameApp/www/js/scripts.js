$(function(){    

       $("img#menu").attr({width: screen.width , height: screen.height});
       $('map').imageMapResize();
     
        $(window).on("orientationchange",function(){
            location.reload(true);
             });
    });