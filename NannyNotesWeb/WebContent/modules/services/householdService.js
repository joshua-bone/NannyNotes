angular.module("NannyNotesApp")
.factory('householdService', function($http){
      var currentHousehold = {};
      var getCurrentHousehold = function(){
        return currentHousehold;
      }
      var setCurrentHousehold = function(hh){
        currentHousehold = hh;
      }

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
      var createHousehold = function(householdName){
        var household = {"name" : householdName};
        return $http({
        	method : 'POST',
        	url : 'api/households/',
        	headers:{
            'Content-Type' : 'application/json'
        	},
        	data : household
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
      return {
        getHouseholds : getHouseholds,
        getHousehold : getHousehold,
        createHousehold : createHousehold,
        deleteHousehold : deleteHousehold,
        updateHousehold : updateHousehold,
        setCurrentHousehold : setCurrentHousehold,
        getCurrentHousehold : getCurrentHousehold
      };
    });
