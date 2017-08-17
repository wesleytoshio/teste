app.controller('AppCtrl', function($scope,$rootScope, $cordovaToast) {

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
})