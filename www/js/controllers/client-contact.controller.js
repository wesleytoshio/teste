app.controller('ClientContactCtrl', function($scope, $state) {

    $scope.goPage = function() {
        $state.go('list');
    }
})