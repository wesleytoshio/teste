app.controller('SignupCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

    $scope.goPage = function() {
        $state.go('gps');
    }

    $scope.signup = {
        current: 0,
        next: function() {
            $ionicSlideBoxDelegate.next();
        },
        back: function() {
            $ionicSlideBoxDelegate.previous();
        }
    }
})