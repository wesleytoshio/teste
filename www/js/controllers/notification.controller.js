app.controller('NotificationCtrl', function($scope, $state) {
    $scope.$on('$ionicView.loaded', function () {
        $scope.isType = localStorage.getItem('user_type');
    });
    $scope.goPage = function() {
        if($scope.isType == 1){
           $state.go('signupCaregiver');
        }else{
          $state.go('signup');  
        }
        
    }
})