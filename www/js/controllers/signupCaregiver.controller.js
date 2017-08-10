app.controller('SignupCaregiverCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate) {

    $scope.goPage = function() {
        $state.go('login');
    }

    $scope.signup = {
        current: 2,
        next: function() {
            $ionicSlideBoxDelegate.next();
        },
        back: function() {
            $ionicSlideBoxDelegate.previous();
        },
        lock: function() {
            $ionicSlideBoxDelegate.enableSlide(false);
        },
        store: function() {
            $state.go('home');
    
        }
    }
    $scope.slideChanged = function(index) {
        $scope.signup.current = index;
    }
})