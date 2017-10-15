$(document).ready(function(){
    
    $(".btn-voll").click(function(){
    $("html, body").animate({scrollTop:$("#posts").offset().top}, 1000);    
    });
    
    
    
    
    
    $(".dropdown-content").click(function(e){
    var elementClassName = e.target.className;  // get the classname of the element clicked
    geth3 = ".A-" + elementClassName;
    console.log(geth3);
    $("html, body").animate({scrollTop:$(geth3).offset().top}, 1000);    
    });
    
    
    
    /*$(".dropdown-content").click(function(find){
    var geth3 = $(find.target).className;
    var htres = ".A-" + geth3;
    console.log(geth3);
    $("html, body").animate({scrollTop:$(htres).offset().top}, 1000);    
    });
*/
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    

window.onload = function () {
        $("html, body").animate({scrollTop:$("#autoscrollhere").offset().top}, 1000); 
    }

