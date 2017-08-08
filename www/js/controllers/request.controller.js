app.controller('RequestCtrl', function($scope, $rootScope, $state, $ionicTabsDelegate) {

    $rootScope.navBarCurrent = 'pinkColor';

    $scope.goPage = function() {
        $state.go('home');
    }
    $scope.request = false;
    $scope.sendRequest = function() {
        $scope.request = !$scope.request;
    }
})