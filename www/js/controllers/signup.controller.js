app.controller('SignupCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate) {

    $scope.goPage = function() {
        $state.go('login');
    }
    $scope.data = {};
    $scope.olds = [{}];
    $scope.signup = {
        current: 1,
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
    $scope.add = function(){
        console.log($scope.olds);
       $scope.olds.push({});
    }
    $scope.slideChanged = function(index) {
        $scope.signup.current = index;
    }
})