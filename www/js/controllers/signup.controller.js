app.controller('SignupCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate) {

    $scope.goPage = function() {
        $state.go('login');
    }

    $scope.signup = {
        current: 0,
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
            console.log('pronto');
        }
    }
    $scope.slideChanged = function(index) {
        $scope.signup.current = index;
    }
})