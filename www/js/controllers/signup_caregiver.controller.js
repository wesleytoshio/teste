app.controller('SignupCaregiverCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate, $ionicPopup, $timeout) {

    $scope.goPage = function() {
        $state.go('login');
    }

    $scope.signup = {
        current: 0,
        next: function() {
            $ionicSlideBoxDelegate.next();
        },
        back: function() {
            $ionicSlideBoxDelegate.previous();
        },
        lock: function() {
            $ionicSlideBoxDelegate.enableSlide(false);
        },
        store: function() {
            $scope.showPopup();

        }
    }
    $scope.slideChanged = function(index) {
        $scope.signup.current = index;
    }
    $scope.showPopup = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'my-popup.html',
            scope: $scope,
            cssClass: 'caregiver-popup-success',
            buttons: []
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });

        $timeout(function() {
            myPopup.close();
            localStorage.setItem('user_type', 1);
            $state.go('home'); //close the popup after 3 seconds for some reason
        }, 1000);
    };

    $scope.popupList = function() {
        var popup = $ionicPopup.alert({
            title: 'Lista de Serviços',
            templateUrl: 'templates/list-services.html',
            cssClass: 'list-popup',
            scope: $scope,
            buttons: [{ text: 'Fechar' }]
        });
        $scope.closePop = function() {
            popup.close();
        }
    }
    $scope.closePopup = function(index) {
        $scope.selected = 'Choose ' + index;
        $scope.selectedIndex = index;
        $timeout(function() {
            $scope.closePop();
        }, 350);
    }

    $scope.popupBirth = function() {
        var popup = $ionicPopup.alert({
            title: 'Data de nascimento',
            templateUrl: 'templates/birth.html',
            cssClass: 'list-popup',
            focusFirstInput: true,
            scope: $scope,
            buttons: [{ text: 'Fechar' }]
        });
        $scope.closePop = function() {
            popup.close();
        }
    }
    $scope.$on("$destroy", function() {
        $scope.closePop();
    });
})