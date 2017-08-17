app.directive('validateEmail', function ($interval) {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return {
    link: function (scope, elm) {
      elm.on("blur", function () {
        var isMatchRegex = EMAIL_REGEXP.test(elm.val());
        if (isMatchRegex && scope.emailValidate || elm.val() == '') {
            scope.$apply(function(){
             scope.emailValidate = false;
            });
          } else if (!isMatchRegex && !scope.emailValidate) {
            scope.$apply(function(){
             scope.emailValidate = true;
            });
          }

      });

    }
  }
});
