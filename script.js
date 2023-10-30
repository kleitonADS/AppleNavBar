function switchbutton() {
  html = document.documentElement;
  html.classList.toggle("ligth");  
}

function toogleMenu() {

  nav = document.querySelector("nav")
  nav.classList.toggle("mobile-active");
  
  // if (nav.classList.contains("mobile-active")){
  
  // }
}

function myFunction() {

  dropdown = document.querySelector(".dropdown")
  dropdown.classList.add("active");




}


window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
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



