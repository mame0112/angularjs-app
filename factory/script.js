//Define PersonManager object
var PersonManager = function (person)
{
	var personInstance = person;

	return {
		getPersonFirstName: function(){
			return personInstance.firstName;
		},

		getPersonLastName: function(){
			return personInstance.lastName;
		},

		getPersonFullName: function(separator){
			return personInstance.firstName + separator + personInstance.lastName;
		}
	};
};

angular.module("App", [])
.value('person', {
	firstName : '',
	lastName : ''
})

//Factory names as "personManager".
.factory('personManager', PersonManager)

.controller('Controller', function($scope, person, personManager){

	person.firstName = 'John';
	person.lastName = 'Doe';

	$scope.personInstance = person;
	$scope.personManagerInstance = personManager;

});
