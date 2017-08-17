app.controller('GpsCtrl', function ($scope, $state, $cordovaGeolocation) {
    
    $scope.$on('$ionicView.loaded', function () {
        $scope.isType = localStorage.getItem('user_type');
    });
    
    $scope.goPage = function () {
        $state.go('notification');
    }
})