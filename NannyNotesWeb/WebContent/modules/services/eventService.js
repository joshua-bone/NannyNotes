angular.module("NannyNotesApp")
.factory('eventService', function($http){

      var getEvents= function(household){
        return $http({
        	method : 'GET',
        	url : 'api/households/' + household.id + '/events'
        })
        .catch(function(err){
        	console.error(err)
        });
      }
      var getEvent= function(event){
    	  return $http({
    		  method : 'GET',
    		  url : 'api/events/' + event.id
    		  });
    	  console.log(event.id);
      }
      var createEvent = function(newEvent){
          var newEvent = { "title": newEvent.title, "household": newEvent.household,"nannyNotes": newEvent.nannyNotes,"parentNotes": newEvent.parentNotes,"startsAt":newEvent.startsAt,"endsAt": newEvent.endsAt, "primaryColor": newEvent.primaryColor, "secondaryColor": newEvent.secondaryColor, "allDay": newEvent.allDay}
        return $http({
        	method : 'POST',
        	url : 'api/events/',
        	headers:{
            'Content-Type' : 'application/json'
        	},
        	data : newEvent
        });
      }
      var deleteEvent = function(event){
        return $http({
        	method : 'DELETE',
        	url : 'api/events/' + event.id,
        	data : event
        });
      }
        var updateEvent = function(newEvent){
            var newEvent = { "title": newEvent.title, "household": newEvent.household,"nannyNotes": newEvent.nannyNotes,"parentNotes": newEvent.parentNotes,"startsAt":newEvent.startsAt,"endsAt": newEvent.endsAt, "primaryColor": newEvent.primaryColor, "secondaryColor": newEvent.secondaryColor, "allDay": newEvent.allDay}
        	return $http({
        		method : 'PUT',
        		url : 'api/events/' + newEvent.id,
        		headers:{
                    'Content-Type' : 'application/json'
                	},
        		data : newEvent
        	});
      }
      return {
        getEvents : getEvents,
        getEvent : getEvent,
        createEvent : createEvent,
        deleteEvent : deleteEvent,
        updateEvent : updateEvent
      };
    });
