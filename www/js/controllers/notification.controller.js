app.controller('NotificationCtrl', function($scope, $state, $rootScope, $cordovaGeolocation) {
    $scope.$on('$ionicView.loaded', function () {
        $scope.isType = localStorage.getItem('user_type');
        //if allowed gps 
        if(localStorage.getItem('allowGps')){
          console.log('ativo');
            $cordovaGeolocation.watchPosition({timeout: 10000, enableHighAccuracy: false}).then(
            null,
            function(err) {
              // error
             console.log('error');
            },
            function(position) {
                $rootScope.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
              console.log('watch', position);

          });
        }
    });
    $scope.goPage = function() {
        if($scope.isType == 1){
           $state.go('signupCaregiver');
        }else{
          $state.go('signup');  
        }
        
    }
})