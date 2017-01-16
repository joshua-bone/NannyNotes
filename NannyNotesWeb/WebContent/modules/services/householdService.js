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
        var getHouseholdChildren = function(household){
        	return $http({
      		  method : 'GET',
      		  url : 'api/households/' + household.id + '/children'
      		  });
        }
        var getHouseholdShifts = function(household){
        	return $http({
        		method : 'GET',
        		url : 'api/households/' + household.id + '/shifts'
        	});
        }
        var getHouseholdUsers = function(household){
          return $http({
            method : 'GET',
            url : 'api/households/' + household.id + '/users'
          });
        }
        var removeChild = function(child){
          return $http({
            method : 'DELETE',
            url : 'api/children/' + child.id
          });
        }
        var addChild = function(household, child){
          child.household = household;
          child.parentNotes = "";
          child.nannyNotes = "";
          console.log("householdService.addChild():");
          console.log(child);
          return $http({
            method : 'POST',
            url : 'api/children/',
            headers:{
              'Content-Type' : 'application/json'
            },
            data : child
          });
        }
        var updateChild = function(child){
            var child = {id: child.id , name : child.name , age: child.age, household: child.household, parentNotes : child.parentNotes, nannyNotes : child.nannyNotes };
        	console.log(child);
        	return $http({
        		method : 'PUT',
        		url : 'api/children/' + child.id,
        		headers:{
        			'Content-Type' : 'application/json'
        		},
        		data : child
        	});
        }

      return {
        getHouseholds : getHouseholds,
        getHousehold : getHousehold,
        createHousehold : createHousehold,
        deleteHousehold : deleteHousehold,
        updateHousehold : updateHousehold,
        getHouseholdChildren : getHouseholdChildren,
        getHouseholdShifts : getHouseholdShifts,
        getHouseholdUsers : getHouseholdUsers,
        setCurrentHousehold : setCurrentHousehold,
        getCurrentHousehold : getCurrentHousehold,
        removeChild : removeChild,
        updateChild : updateChild,
        addChild : addChild
      };
    });
