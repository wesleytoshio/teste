'use strict';

app.service('AuthService', AuthService);

AuthService.$inject = ['$http', 'BASE_URL', '$rootScope'];

function AuthService($http, BASE_URL, $rootScope) {
  var vm = this;

  vm.loginWithMail = function (data) {
    return $http.post(BASE_URL + '/auth/with.mail', data);
  };
  
  vm.phoneRequest = function (data) {
    console.log(data);
    return $http.post(BASE_URL + '/auth/phone/request', data);
  };
  vm.phoneVerify = function (code) {
    return $http.get(BASE_URL + '/auth/phone/verify/' + code);
  };
  vm.reset = function (data) {
    var config = {
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      }
    };
    return $http.post(BASE_URL + '/auth/password/request', data, config);
  };

  vm.sendCode = function (data) {
    console.log(data);
    return $http.get(BASE_URL + '/auth/password/verify/' + data.code);
  };

  vm.newPassword = function (data) {
    return $http.put(BASE_URL + '/auth/password/restore', data);
  };
}
