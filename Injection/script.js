(function(){
	var myModule = angular.module('myModule', []);

	myModule.service('sampleService', SampleService);
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