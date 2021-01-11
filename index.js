// variables
var daypart;
var year;


// Function to check local time
function checkTime(){
  var hour = new Date();
  year = hour.getFullYear();
  hour = hour.getHours();
  daypart = Math.floor(hour / 6);
  document.getElementById("copyright").innerHTML = "Copyright <i class='far fa-copyright'></i> " + year + " Marcia van den Hout";
  switch(daypart){
    case 0:
    document.getElementById("navbarTitle").innerHTML = "<img class='nav-img rounded-circle' src='images/marcia.jpg'> Good night";
    break;
    case 1:
    document.getElementById("navbarTitle").innerHTML = "<img class='nav-img rounded-circle' src='images/marcia.jpg'> Good morning";
    break;
    case 2:
    document.getElementById("navbarTitle").innerHTML = "<img class='nav-img rounded-circle' src='images/marcia.jpg'> Good afternoon";
    break;
    case 3:
    document.getElementById("navbarTitle").innerHTML = "<img class='nav-img rounded-circle' src='images/marcia.jpg'> Good Evening";
  }
}
