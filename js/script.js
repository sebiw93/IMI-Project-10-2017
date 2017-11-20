$(document).ready(function(){
    
    $(".btn-voll").click(function(){
    $("html, body").animate({scrollTop:$("#posts").offset().top}, 1000);    
    });
    
    
    
    
    
    $(".dropdown-content").click(function(e){
    var elementClassName = e.target.className;  // get the classname of the element clicked
    geth3 = ".A-" + elementClassName;
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



/*    var countR = 0;

function myFunctionone(classofelement) {
    
    var classelement = classofelement.target.className;
    
    if (countR < 2){
    document.getElementsByClassName(classelement).style.width = "300%";
    document.getElementById(classelement).style.height = "300px";
    countR = 4;
    }
    else{
    document.getElementById(classelement).style.width = "49%";
    document.getElementById(classelement).style.height = "200px";
    countR = 0;
    }   
}*/



    $(".desktopGrades").click(function(ElemID){
    var IDElement = ElemID.target.id;  // get the ID of the element clicked
    var IDElement_p =  "ONE" + String(IDElement);
    var elehight = document.getElementById(IDElement).style.height;
    
    if (elehight == "300px"){
    document.getElementById(IDElement).style.height = "200px";
    document.getElementById(IDElement).style.width = "49%";  
    document.getElementById(IDElement_p).style.display = "none";  
    }
    else{
    document.getElementById(IDElement).style.height = "300px";
    document.getElementById(IDElement).style.width = "100%";
    document.getElementById(IDElement_p).style.display = "block"; 
    }
    });







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


