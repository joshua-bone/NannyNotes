angular.module("NannyNotesApp")
.factory('userService', function($http){
      var createUser = function(newUser){
        return $http({
        	method : 'POST',
        	url : 'api/users/',
        	headers:{
            'Content-Type' : 'application/json'
        	},
        	data : newUser
        });
      };
      return {
        createUser : createUser
      };
    });
