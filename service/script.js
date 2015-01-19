var PersonManager = function (person)
{
	this.personInstance = person;
};

PersonManager.prototype.getPersonFirstName = function()
{
	return this.personInstance.firstName;
};

PersonManager.prototype.getPersonLastName = function()
{
	return this.personInstance.lastName;
};

PersonManager.prototype.getPersonFullName = function(separator)
{
	return this.personInstance.firstName + separator + this.personInstance.lastName;
};

angular.module("App", [])
.value('person', {
	firstName : '',
	lastName : ''
})

//Service names as "personManager".
.service('personManager', PersonManager)

.controller('Controller', function($scope, person, personManager){
	person.firstName = 'John';
	person.lastName = 'Doe';

	$scope.personManagerInstance = personManager;

});
