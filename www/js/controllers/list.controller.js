app.controller('ListCtrl', function($scope, $state,$ionicModal) {
    $scope.$on('$ionicView.loaded', function(){
    $scope.isType = localStorage.getItem('user_type');
    });
    $scope.goHome = function() {
        $state.go('home');
    }
    $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.isSendProposal = false;
    $scope.toogle = function(){
        $scope.isSendProposal = !$scope.isSendProposal
    }
    $scope.done = function(){
        $scope.isProposal = true;
    }
    $scope.cancel = function(){
        $scope.isProposal = false;
        $scope.isSendProposal = false;
        $scope.modal.hide();
        $state.go('clientContact');
    }
})