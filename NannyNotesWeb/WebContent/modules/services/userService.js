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
      var getUser= function(userId){
    	  
    	  return $http({
    		  method : 'GET',
    		  url : 'api/users/' + userId
    		  });
    	  console.log(userId);
      }
      return {
        createUser : createUser,
        getUser: getUser
      };
    });
