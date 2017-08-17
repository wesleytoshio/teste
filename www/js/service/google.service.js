'use strict';

app.service('GoogleMapsService', GoogleMapsService);

function GoogleMapsService($http, GOOGLE_KEY) {
  var vm = this;

  vm.geocode = function (location) {
      console.log(location);
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+location+'&sensor=false');
  };
    
}
