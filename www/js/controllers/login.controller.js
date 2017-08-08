app.controller('LoginCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate) {

    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.goPage = function() {
        $state.go('home');
    }
})