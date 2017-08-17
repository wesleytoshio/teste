var app = angular.module('cudadosoApp', ['ionic', 'ngCordova', 'angular-tiny-calendar', 'ion-datetime-picker'])

.run(function($ionicPlatform, $rootScope, $ionicPickerI18n, $cordovaGeolocation,$window) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
            window.addEventListener('native.keyboardshow', function(){
              document.body.classList.add('keyboard-open');
            });
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    //function for allowed GPS
    $rootScope.allowGPS = function(){
          $cordovaGeolocation
            .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
            .then(function (position) {
                $rootScope.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
              console.log(position);
              localStorage.setItem('allowGps', true);
              //$window.location.reload();
              $rootScope.showToast('GPS Ativado', 'short', 'bottom');
            }, function(err) {
              // error
             // $window.location.reload();
              localStorage.setItem('allowGps', true);
              $rootScope.showToast('GPS Ativado', 'short', 'bottom');
            });
        
    }
    //if allowed gps 
    if(localStorage.getItem('allowGps')){
        $cordovaGeolocation.watchPosition({timeout: 10000, enableHighAccuracy: false}).then(
        null,
        function(err) {
          // error
         console.log('error');
        },
        function(position) {
            $rootScope.location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
          console.log('watch', position);
          
      });
    }
    $ionicPickerI18n.weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    $ionicPickerI18n.months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    $ionicPickerI18n.ok = "Definir";
    $ionicPickerI18n.cancel = "Cancelar";
    $ionicPickerI18n.okClass = "button-positive button-purple";
    $ionicPickerI18n.cancelClass = "button-stable";
    $ionicPickerI18n.arrowButtonClass = "button-positive button-arrow-calendar";
})
.constant('BASE_URL', 'http://appockserver14.cloudapp.net/api.appock.co/api_cuidadoso_v1/public/v1/app')
.constant('GOOGLE_KEY', 'AIzaSyBcdola8PQIYUmuZ2EPpbs1KpoK_hxN9f4')
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    moment.locale('pt-BR');
    $stateProvider

    // setup an abstract state for the tabs directive

        .state('onboarding', {
            url: '/onboarding',
            templateUrl: 'templates/onboarding.html',
            controller: 'OnboardingCtrl'
        })
        .state('perfil', {
            url: '/perfil',
            templateUrl: 'templates/perfil.html',
            controller: 'PerfilCtrl'
        })
        .state('gps', {
            url: '/gps',
            templateUrl: 'templates/gps.html',
            controller: 'GpsCtrl'
        })
        .state('notification', {
            url: '/notification',
            templateUrl: 'templates/notification.html',
            controller: 'NotificationCtrl',
            cache: false
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl',
            cache: false
        })
        .state('signupCaregiver', {
            url: '/signup-caregiver',
            templateUrl: 'templates/signup-caregiver.html',
            controller: 'SignupCaregiverCtrl',
            cache: false
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            cache: false
        })
        .state('request', {
            url: '/request',
            templateUrl: 'templates/request.html',
            controller: 'RequestCtrl',
            cache: false
        })
        .state('review', {
            url: '/review',
            templateUrl: 'templates/review.html',
            controller: 'ReviewCtrl',
            cache: false
        })
        .state('caregiverInfos', {
            url: '/caregiverInfos',
            templateUrl: 'templates/caregiver-infos.html',
            controller: 'CaregiverInfosCtrl',
            cache: false
        })
        .state('caregiverValues', {
            url: '/caregiverValues',
            templateUrl: 'templates/caregiver-values.html',
            controller: 'CaregiverValuesCtrl',
            cache: false
        })
        .state('caregiverComments', {
            url: '/caregiverComments',
            templateUrl: 'templates/caregiver-comments.html',
            controller: 'CaregiverCommentsCtrl',
            cache: false
        })
        .state('list', {
            url: '/list',
            templateUrl: 'templates/list.html',
            controller: 'ListCtrl',
            cache: false
        })
        // Each tab has its own nav history stack:
        .state('clientContact', {
            url: '/clientContact',
            templateUrl: 'templates/client-contact.html',
            controller: 'ClientContactCtrl',
            cache: false
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            cache: false
        })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/onboarding');

});