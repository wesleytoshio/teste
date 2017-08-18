app.controller('LoginCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate,AuthService) {

    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.goPage = function() {
        $state.go('home');
        localStorage.setItem('user_type', 0)
    }
     $scope.data = {};
    /* API COMMUNICATION
    ----------------------------------------------*/
    $scope.signin = {
            request: function() {
                $rootScope.isLoading = true;
                AuthService.loginWithMail($scope.data).then(function(r) {
                    $scope.fillUserLocalStorage(r.data.user_infos, r.data.token);
                    $state.go('home');
                    $scope.showToast('Login efetuado com sucesso', 'short', 'bottom');
                    $scope.data = {};
                    $rootScope.isLoading = false;
                }).catch(function(err) {
                    console.log(err);
                    $rootScope.isLoading = false;
                    $scope.signin.error.emailNotExist = (err && err.data.machine && err.data.machine.includes('no-exists:email'));
                    $scope.signin.error.incorrectPassword = err.status == 403 ? true : false;
                    console.log($scope.signin.error);
                });
            },
            error: {
                'emailNotExist': false,
                'incorrectPassword': false,
            }
        }
})