//Define PersonManager object
var PersonManager = function ()
{
	return {
		$get: function(person)
		{
			return{
				getPersonFirstName: function(){
					return person.firstName;
				},

				getPersonLastName: function(){
					return person.lastName;
				},

				getPersonFullName: function(separator){
					return person.firstName + separator + person.lastName;
				}

			};

		}
	};
};

angular.module("App", [])
.value('person', {
	firstName : '',
	lastName : ''
})

//provider names as "personManager".
.provider('personManager', PersonManager)

.controller('Controller', function($scope, person, personManager){

	person.firstName = 'John';
	person.lastName = 'Doe';

	$scope.personInstance = person;
	$scope.personManagerInstance = personManager;

});
