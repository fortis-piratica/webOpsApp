var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function($scope) {

	$scope.formData = {}; //Object to store data.

	//Function to submit the form after complete validation
	$scope.submitForm = function(isValid) {

		//Making sure that form is completely valid
		if(isValid) {
			alert("Registered succesfully");
		}
	};

	

});

