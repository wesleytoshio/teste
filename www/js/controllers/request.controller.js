app.controller('RequestCtrl', function($scope, $rootScope, $state, $ionicTabsDelegate) {
    $scope.init = function() {
        $ionicTabsDelegate.select(2);
    }
    $rootScope.navBarCurrent = 'pinkColor';
    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.goPage = function() {
        $state.go('app.home');
    }
    $scope.init();
})