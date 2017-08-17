app.controller('CaregiverInfosCtrl', function($scope, $rootScope, $state,$ionicModal) {
    $scope.$on('$ionicView.loaded', function(){
    $scope.isType = localStorage.getItem('user_type');
    });
    $rootScope.navBarCurrent = 'pinkColor';
    $scope.isClicked = false;
    $scope.showCarigiver = function(){
      $scope.isClicked = !$scope.isClicked;  
    }
    $scope.goPage = function() {
        $state.go('home');
    }
    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.goRequest = function() {
        $state.go('request');
    }
    $scope.goReview = function() {
        $state.go('review');
    }
    $scope.goCaregiverValues = function(){
        $state.go('caregiverValues');
    }
})