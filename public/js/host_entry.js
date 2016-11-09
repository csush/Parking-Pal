
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', function(){
    getCoordinates(autocomplete);
}, false);
}

function getCoordinates(autocomplete) {
  console.log('entered');
  var place = autocomplete.getPlace();

var lat = place.geometry.location.lat(),
    long = place.geometry.location.lng();

          $("#lat").val(lat);
      $("#long").val(long);

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  console.log('completed');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#lat").val(position.coords.latitude);
      $("#long").val(position.coords.longitude);
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
