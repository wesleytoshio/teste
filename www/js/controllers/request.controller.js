app.controller('RequestCtrl', function($scope, $rootScope, $state, $ionicTabsDelegate) {
    $scope.$on('$ionicView.loaded', function(){
    $scope.isType = localStorage.getItem('user_type');
    });
    $rootScope.navBarCurrent = 'pinkColor';

    $scope.goPage = function() {
        $state.go('home');
    }
    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.request = false;
    $scope.sendRequest = function() {
        $scope.request = !$scope.request;
    }
})