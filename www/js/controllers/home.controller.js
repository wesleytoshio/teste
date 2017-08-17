app.controller('HomeCtrl', function($scope, $rootScope, $state,$ionicModal) {
    $scope.$on('$ionicView.loaded', function(){
    $scope.isType = localStorage.getItem('user_type');
    });

    $rootScope.navBarCurrent = 'pinkColor';
    $scope.goRequest = function() {
        $state.go('request');
    }
    $scope.goSignup = function() {
        $state.go('signup');
    }
    $scope.goReview = function() {
        $state.go('review');
    }
    $scope.goProposal = function() {
        $state.go('list');
    }
    $scope.events = [{
            "title": "Today Event",
            "startDate": "2017-08-09",
            "endDate": null,
            "time": "21:00",
            "status": 0
        },
        {
            "title": "Tomorrow",
            "startDate": "2017-08-05",
            "endDate": null,
            "time": "17:15",
            "status": 1
        },
        {
            "title": "All-day event",
            "startDate": "2017-08-15",
            "endDate": null,
            "time": "09:15",
            "status": 1
        },
        {
            "title": "Two in one day!",
            "startDate": "2017-08-11",
            "endDate": null,
            "time": "09:00",
            "status": 0
        },
        {
            "title": "Three in one day!",
            "startDate": "2017-08-11",
            "endDate": null,
            "time": "15:00",
            "status": 1
        },
        {
            "title": "Multi-day event",
            "startDate": "2017-09-13",
            "endDate": null,
            "time": "12:15",
            "status": 1
        }
    ];


})