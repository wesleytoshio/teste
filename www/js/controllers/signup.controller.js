app.controller('SignupCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate, UserService) {

    $scope.goPage = function() {
        $state.go('login');
    }
    $scope.data = {};
    $scope.data.olds = [{}];
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
            UserService.store($scope.data).then(function(r){
                console.log(r);
            }).catch(function(e){
                console.log(e);
            });
            $state.go('home');
            
        }
    }
    $scope.add = function(){
        console.log($scope.olds);
       $scope.data.olds.push({});
    }
    $scope.slideChanged = function(index) {
        $scope.signup.current = index;
    }
})