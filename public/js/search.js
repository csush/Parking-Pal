var data = require("../../data.json");

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.877491, lng: -117.235276},
    zoom: 13
  });
  var input = /** @type {!HTMLInputElement} */(
      document.getElementById('pac-input'));

  var types = document.getElementById('type-selector');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });

  
  var myLatlng = new google.maps.LatLng(32.878871,-117.237490);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
  });
  marker.setMap(map);

  var myLatlng2 = new google.maps.LatLng(32.877754,-117.2325977);
  var marker2 = new google.maps.Marker({
    position: myLatlng2,
    title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker2.setMap(map);

  // // get length of data
  // var len = data.markers.length;
  // var x = 0;
  // while(x < len) {
  
  //   var myLatlng = new google.maps.LatLng(data.markers[x].lat,data.markers[x].lon);

  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     title: data.markers[x].title
  //   });
  //   marker.setMap(map);
  // }

}
