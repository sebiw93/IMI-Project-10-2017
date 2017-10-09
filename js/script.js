$(document).ready(function(){
    
    $(".btn").click(function(){
    $("html, body").animate({scrollTop:$("#posts").offset().top}, 1000);    
    });

    

    $(".slogan").click(function(){
    $("html, body").animate({scrollTop:$("#familie-section").offset().top}, 1000);    
    });

});