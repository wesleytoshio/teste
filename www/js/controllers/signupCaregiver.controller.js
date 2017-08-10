app.controller('SignupCaregiverCtrl', function($scope, $rootScope, $state, $ionicSlideBoxDelegate,$ionicPopup,$timeout) {

    $scope.goPage = function() {
        $state.go('login');
    }

    $scope.signup = {
        current: 2,
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
  }, 5000);
 };
})