var app = angular.module('cudadosoApp', ['ionic', 'angular-tiny-calendar'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('top');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })
        .state('onboarding', {
            url: '/onboarding',
            templateUrl: 'templates/onboarding.html',
            controller: 'OnboardingCtrl'
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
        // Each tab has its own nav history stack:

    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        cache: false
    })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/onboarding');

});