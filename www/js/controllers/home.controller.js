app.controller('HomeCtrl', function($scope, $rootScope, $state,$ionicModal) {

    $rootScope.navBarCurrent = 'pinkColor';
    $scope.goRequest = function() {
        $state.go('request');
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

    $scope.openModal = function() {
          $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
       modal.show();
       $scope.modal = modal;
    });
    };
})