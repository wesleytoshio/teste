app.controller('ListCtrl', function($scope, $state) {
    $scope.$on('$ionicView.loaded', function(){
    $scope.isType = localStorage.getItem('user_type');
    });
    $scope.goHome = function() {
        $state.go('home');
    }
})