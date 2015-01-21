(function(){
	var myModule = angular.module('myModule', []);

	//First argument: the name of service
	//Second argument: Constructor method for service
	myModule.service('sampleService', SampleService);

	//Instance for service is injected since I set "sampleService" which has same name with service name that I set above
	myModule.controller('SampleController', function($scope, sampleService){
		$scope.message = sampleService.method();
	});

	function SampleService()
	{
		this.method = function()
		{
			return 'sample service';
		};
	}		

})();