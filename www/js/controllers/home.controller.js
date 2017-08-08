app.controller('HomeCtrl', function($scope, $rootScope, $state) {

    $rootScope.navBarCurrent = 'pinkColor';
    $scope.goRequest = function() {
        $state.go('request');
    }
    $scope.events = [{
            "title": "Today Event",
            "startDate": "2017-08-08T20:00:27.277Z",
            "endDate": null,
            "time": "21:00"
        },
        {
            "title": "Tomorrow",
            "startDate": "2017-08-09T20:00:27.277Z",
            "endDate": null,
            "time": "17:15"
        },
        {
            "title": "All-day event",
            "startDate": "2017-08-11T20:00:27.277Z",
            "endDate": null
        },
        {
            "title": "Two in one day!",
            "startDate": "2017-08-11T20:00:27.277Z",
            "endDate": null,
            "time": "09:00"
        },
        {
            "title": "Three in one day!",
            "startDate": "2017-08-11T20:00:27.277Z",
            "endDate": null,
            "time": "15:00"
        },
        {
            "title": "Multi-day event",
            "startDate": "2017-09-13T20:00:27.277Z",
            "endDate": null
        }
    ]
})