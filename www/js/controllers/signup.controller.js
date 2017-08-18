app.controller('SignupCtrl', function ($scope, $rootScope, $state, $ionicSlideBoxDelegate,$ionicScrollDelegate, UserService) {

    $scope.goPage = function () {
        $state.go('login');
    }
    $scope.data = {};
    $scope.olds = [{}];
    $scope.signup = {
        current: 0,
        next: function () {
            $ionicSlideBoxDelegate.next();
            console.log($scope.data);
            $rootScope.formIsValid = false;
            console.log($scope.olds);
          $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        },
        back: function () {
            $ionicSlideBoxDelegate.previous();
        },
        lock: function () {
            $ionicSlideBoxDelegate.enableSlide(false);
        },
        store: function () {
            $rootScope.isLoading = true;
            $scope.data.olds = $scope.olds;
            $scope.data.type = localStorage.getItem('user_type');
            UserService.store($scope.data).then(function (r) {
                $rootScope.isLoading = false;
                if (r.status == 200) {
                    console.log(r);
                    $scope.fillUserLocalStorage(r.data.user_infos, r.data.token);
                    $scope.data = {};
                    $state.go('home');
                    $scope.showToast('Conta criada com sucesso', 'short', 'bottom');
                }
            }).catch(function (e) {
                $rootScope.isLoading = false;
                $scope.signup.error.emailExsists = (e && e.data.machine && e.data.machine.includes('unique:email'));
                $scope.signup.error.cpfExsists = (e && e.data.machine && e.data.machine.includes('unique:cpf'));
                if($scope.signup.error.emailExsists || $scope.signup.error.cpfExsists){
                  $scope.signup.current = 0;
                  $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
                }
                console.log(e);
            });
        },
         error: {
          "emailExsists": false,
          "cpfExsists": false,
         }
    }
    $scope.add = function () {
        console.log($scope.olds);
        console.log($scope.data);
        $scope.olds.push({});
    }
    $scope.slideChanged = function (index) {
        $scope.signup.current = index;
    }
})