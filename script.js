
var navLinks = document.querySelector(".nav-links")

function showmenu(){
  navLinks.style.top="0px";
  document.getElementById("navopen").style.display="none";
  document.getElementById("navclose").style.display="block";



}

function hidemenu(){
    navLinks.style.top="-1200px";
    document.getElementById("navclose").style.display="none";
    document.getElementById("navopen").style.display="block";
  

}