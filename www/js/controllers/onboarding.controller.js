app.controller('OnboardingCtrl', function($scope, $state) {

    $scope.goPage = function() {
        $state.go('gps');
    }
})