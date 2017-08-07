app.controller('NotificationCtrl', function($scope, $state) {

    $scope.goPage = function() {
        $state.go('signup');
    }
})