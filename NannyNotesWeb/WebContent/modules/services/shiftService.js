angular.module("NannyNotesApp")
.factory('shiftService', function($http){

      var getShifts= function(household){
        return $http({
        	method : 'GET',
        	url : 'api/households/' + household.id + '/shifts'
        })
        .catch(function(err){
        	console.error(err)
        });
      }
      var getShift= function(shift){
    	  return $http({
    		  method : 'GET',
    		  url : 'api/shifts/' + shift.id
    		  });
    	  console.log(shift.id);
      }
      var createShift = function(u, h, newShift){
          var newShift = { "userId": u.id, "householdId": h.id, "id": newShift.id,"nannyNotes":"","parentNotes":"","startDateTime":newShift.startDateTime,"endDateTime": newShift.endDateTime}
        return $http({
        	method : 'POST',
        	url : 'api/shifts/',
        	headers:{
            'Content-Type' : 'application/json'
        	},
        	data : newShift
        });
      }
      var deleteShift = function(shift){
        return $http({
        	method : 'DELETE',
        	url : 'api/shifts/' + shift,
        	data : shift
        });
      }
        var updateShift = function(newShift){
            var newShift = {"id": newShift.id,"nannyNotes":"","parentNotes":"","startDateTime":newShift.startDateTime,"endDateTime": newShift.endDateTime}
        	return $http({
        		method : 'PUT',
        		url : 'api/shifts/' + newShift.id,
        		headers:{
                    'Content-Type' : 'application/json'
                	},
        		data : newShift
        	});
      }
      return {
        getShifts : getShifts,
        getShift : getShift,
        createShift : createShift,
        deleteShift : deleteShift,
        updateShift : updateShift
      };
    });
