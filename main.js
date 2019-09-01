
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* ------google maps---*/
function initMap() {
  var uluru = {lat: 28.607832, lng: 77.064299};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}