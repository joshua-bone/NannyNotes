angular.module("NannyNotesApp")
.factory('shiftService', function($http){

//      var getShifts= function(){
//        return $http({
//        	method : 'GET',
//        	url : 'api/shift/'
//        })
//        .catch(function(err){
//        	console.error(err)
//        });
//      }
      var getShift= function(shiftId){
    	  return $http({
    		  method : 'GET',
    		  url : 'api/shifts/' + shiftId
    		  });
    	  console.log(shiftId);
      }
      var createShift = function(uId, hId){
        var newShift = {userId : uId, householdId: hId};
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
            var newShift = {id: newShift.id , userId : newShift.userId , householdId : newShift.householdId };
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
//        getShifts : getShifts,
        getShift : getShift,
        createShift : createShift,
        deleteShift : deleteShift,
        updateShift : updateShift
      };
    });
