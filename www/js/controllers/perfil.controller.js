app.controller('PerfilCtrl', function($scope, $state) {
    $scope.goPage = function(type) {
        if(type == '1'){
           localStorage.setItem('user_type', 1);
           $state.go('gps');
        }
        else{
            localStorage.setItem('user_type', 0);
           $state.go('gps');
        }
    }
})