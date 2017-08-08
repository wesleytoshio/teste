app.controller('GpsCtrl', function($scope, $state) {

    $scope.goPage = function() {
        $state.go('notification');
    }
})