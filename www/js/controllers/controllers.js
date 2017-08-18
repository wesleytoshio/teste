app.controller('AppCtrl', function($scope, $rootScope,$state, $window, $cordovaToast) {

    /* GLOBAL NOTIFICATION
    -------------------------------------------------- */
    $rootScope.showToast = function(message, duration, location) {
        if (window.cordova) {
            //GLOBAL TOAST
            $cordovaToast.show(message, duration, location).then(function(success) {}, function(error) {
                alert(message);
            });
        } else {
            alert(message);
        }
    }
    /* LOCALSTORAGE
        -------------------------------------------------- */
    $scope.fillUserLocalStorage = function(userInfos, userToken) {
        $window.localStorage.setItem('user_token', userToken);
        Object.keys(userInfos).map(function(cur) {
            try {
                $window.localStorage.removeItem('user_' + cur);
                console.log('limpou');
            } catch (e) {
                console.log('Erro ao limpar localStorage');
            }
            $window.localStorage.setItem('user_' + cur, userInfos[cur]);
        });
        console.log($window.localStorage);
        $scope.userInfo = $scope.getUserInfo();
    };
    $scope.getUserInfo = function() {
        return {
            id: $window.localStorage.getItem('user_id'),
            token: $window.localStorage.getItem('user_token'),
            name: $window.localStorage.getItem('user_name'),
            surname: $window.localStorage.getItem('user_surname'),
            email: $window.localStorage.getItem('user_email'),
            type: $window.localStorage.getItem('user_type')
        }
    }
    /* LOGOUT
    -------------------------------------------------- */
    $rootScope.logout = function() {
//        localStorage.removeItem('user_token');
//        localStorage.removeItem('user_id');
//        localStorage.removeItem('user_email');
//        localStorage.removeItem('user_name');
//        localStorage.removeItem('user_phone');
//        localStorage.removeItem('user_type');
//        localStorage.removeItem('user_surname');
//        localStorage.removeItem('user_verify_code');
        $scope.data = {};
        $state.go('login');
        Object.keys(localStorage)
        .forEach(function(key){
             if (/^user_/.test(key)) {
             ///^todo-|^note-/
             localStorage.removeItem(key);
             }
         });
    };
    $scope.userInfo = $scope.getUserInfo();
})