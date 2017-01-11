angular.module("NannyNotesApp")
.factory('userService', function($http){
      var createUser = function(username, password, name, role){
        var newUser= { "name" : name,
                       "role" : role,
                       "username" : username,
                       "password" : password};
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
