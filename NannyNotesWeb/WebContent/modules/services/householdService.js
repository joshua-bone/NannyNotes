angular.module("NannyNotesApp")
.factory('householdService', function($http){

      var getHouseholds= function(){
        return $http({
        	method : 'GET',
        	url : 'api/households/'
        })
        .catch(function(err){
        	console.error(err)
        });
      }
      var getHousehold= function(householdId){
    	  return $http({
    		  method : 'GET',
    		  url : 'api/households/' + householdId
    		  });
    	  console.log(householdId);
      }
      var createHousehold = function(household){
        var newHousehold = {name : household};
        return $http({
        	method : 'POST',
        	url : 'api/households/',
        	headers:{
            'Content-Type' : 'application/json'
        	},
        	data : newHousehold
        });
      }
      var deleteHousehold = function(household){
        return $http({
        	method : 'DELETE',
        	url : 'api/households/' + household,
        	data : household
        });
      }
        var updateHousehold = function(newHousehold){
            var newHousehold = {id: newHousehold.id , name : newHousehold.name , parentNotes : newHousehold.parentNotes, nannyNotes : newHousehold.nannyNotes };
        	return $http({
        		method : 'PUT',
        		url : 'api/households/' + newHousehold.id,
        		headers:{
                    'Content-Type' : 'application/json'
                	},
        		data : newHousehold
        	});
      }
        var getHouseholdChildren = function(household){
        	return $http({
      		  method : 'GET',
      		  url : 'api/households/' + household.id + '/children'
      		  });
        }
        
      return {
        getHouseholds : getHouseholds,
        getHousehold : getHousehold,
        createHousehold : createHousehold,
        deleteHousehold : deleteHousehold,
        updateHousehold : updateHousehold,
        getHouseholdChildren : getHouseholdChildren
        
      };
    });
