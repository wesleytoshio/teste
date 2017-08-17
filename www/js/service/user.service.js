'use strict';

app.service('UserService', UserService);

UserService.$inject = ['$http', 'BASE_URL'];

function UserService($http, BASE_URL) {
    var vm = this;

    vm.store = function(data) {
        return $http.post(BASE_URL + '/user', data);
    };
    vm.update = function(data) {
        return $http.put(BASE_URL + '/user', data);
    };
    vm.disable = function(data) {
        return $http.put(BASE_URL + '/user/disable', data);
    };

}