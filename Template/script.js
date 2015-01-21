angular.module('mainModule', [])
.controller('mainController', function($scope)
{
	$scope.myScopeVar = "The scope variable value";
})

.directive("nghTemplateDir", function()
{
	return {
		template: 'This is <strong>nghTemplateDir</strong> directive printing {{myScopeVar}}'
	};
})

.directive("nghTemplateUrlDir", function()
{
	return {
		templateUrl: 'nghTemplateUrlDirBody.html'
	};
});