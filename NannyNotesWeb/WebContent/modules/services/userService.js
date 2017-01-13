angular.module("NannyNotesApp")
.factory('userService', function($http, authenticationService){
      var currentUser = {};
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

      var updateUser = function(user){
        return $http({
          method : 'PUT',
          url : 'api/users/' + user.id,
          headers:{
            'Content-Type' : 'application/json'
        	},
        	data : user
        })
      };

      var getUser= function(userId){
    	  return $http({
    		  method : 'GET',
    		  url : 'api/users/' + userId
        });
      };
      var updateCurrentUser = function(id){
        return getUser(authenticationService.currentUser().id).then(function(result){
          currentUser = result.data;
        });

      };
      var getCurrentUser = function(){
        return currentUser;
      };
      return {
        getCurrentUser: getCurrentUser,
        createUser : createUser,
        getUser: getUser,
        updateCurrentUser: updateCurrentUser,
        updateUser : updateUser
      };
    });
