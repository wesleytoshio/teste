app.directive('formValidate', function($rootScope) {
	return function(scope, el, attrs) {
     
        scope.$watch(attrs.name+'.$valid', function(newVal, oldVal) {
            console.log(newVal);
           if(newVal){
            $rootScope.formIsValid = true;
           }else{
              $rootScope.formIsValid = false;     
           }
        });
        
	}
});