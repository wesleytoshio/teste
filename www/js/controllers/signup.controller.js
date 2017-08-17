app.controller('SignupCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate) {

    $scope.goPage = function() {
        $state.go('login');
    }
    $scope.data = {};
    $scope.signup = {
        current: 0,
        next: function() {
            $ionicSlideBoxDelegate.next();
            console.log($scope.data);
            $rootScope.formIsValid=false;
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