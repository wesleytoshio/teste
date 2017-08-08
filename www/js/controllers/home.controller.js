app.controller('HomeCtrl', function($scope, $rootScope, $state) {

    $rootScope.navBarCurrent = 'pinkColor';
    $scope.goRequest = function() {
        $state.go('request');
    }
})