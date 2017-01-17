
angular.module("NannyNotesApp")
.component('dailycalendarComponent', {
	controller : function(moment, alert, calendarConfig, $http, householdService, userService, eventService) {  
		var vm = this;
		vm.household = householdService.getCurrentHousehold();
		vm.getEvents = function(household){
			eventService.getEvents(household)
			.then(function(response){
				vm.events = response.data;
			}).catch(function(err){
				console.log('in getEvents error (dailyCalendarComp)');
			});
		}
		vm.getEvents(vm.household);
		vm.newEvent={};
		vm.showNewEventForm = false;
	// These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'day';
    vm.viewDate = new Date();
    var actions = [{
      label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
      onClick: function(args) {
        alert.show('Edited', args.calendarEvent);
      }
    }, {
      label: '<i class=\'glyphicon glyphicon-remove\'></i>',
      onClick: function(args) {
        alert.show('Deleted', args.calendarEvent);
      }
    }];
    vm.events= [
    
//    	{
//    	id: 1,
//    	title: newEvent.title, 
//    	household: newEvent.household,
//    	nannyNotes: newEvent.nannyNotes,
//    	parentNotes: newEvent.parentNotes,
//    	startsAt:newEvent.startsAt,
//    	endsAt: newEvent.endsAt, 
//    	primary_color: newEvent.primaryColor, 
//    	secondaryColor: newEvent.secondaryColor, 
//    	draggable: newEvent.draggable, 
//    	resizable: newEvent.resizable, 
//    	allDay: newEvent.allDay
//        color: calendarConfig.colorTypes.warning,
//        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
//        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
//      }, 
    	{
        title: "recital day",
        color: calendarConfig.colorTypes.info,
        nannyNotes: "I need the hair of the dog",
        parentNotes: "take a sip off our Jose Cuervo",
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: "worst day",
        color: calendarConfig.colorTypes.important,
        nannyNotes: "he wouldn't take his shoes off before getting into bed",
        parentNotes: "make sure you don't get their lice",
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
        actions: actions
      }
    ];
    vm.household.events= vm.events;
	vm.toggleNewEventForm = function(){
		vm.showNewEventForm = !vm.showNewEventForm;
	}
    vm.cellIsOpen = true;

    vm.addEvent = function(newEvent) {
    	eventService.createEvent(newEvent)
    	.then(function(response){
//    		vm.newEvent = ""; 
    	}).catch(function(err){
    		console.log('in add error');
    	});
    };
//    	title: newEvent.title, 
//    	household: newEvent.household,
//    	nannyNotes: newEvent.nannyNotes,
//    	parentNotes: newEvent.parentNotes,
//    	startsAt: moment().startOf('day').toDate(),
//    	endsAt: moment().endOf('day').toDate(),
//    	primaryColor: newEvent.primaryColor, 
//    	secondaryColor: newEvent.secondaryColor, 
//    	draggable: true,
//    	resizable: true,
//    	allDay: newEvent.allDay

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
  	eventService.getEvent(event)
  	.then(function(response){
  		vm.event = response.data;
  		console.log("in show event component function");
  	}).catch(function(err){
  		console.log('in get error');
  	});
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
  	eventService.updateEvent(event)
  	.then(function(response){
  		vm.event = response.data; 
  		console.log("in update events component function");
  	}).catch(function(err){
  		console.log('in edit error');
  	});
  };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
	    	eventService.deleteEvent(event)
	    	.then(function(response){
	    		vm.events = response.data; 
	    		console.log("in destroy events component function");
	    	}).catch(function(err){
	    		console.log('in destroy error');
	    	});
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

    vm.timespanClicked = function(date, cell) {

      if (vm.calendarView === 'month') {
        if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      } else if (vm.calendarView === 'year') {
        if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      }

    };
	},
	templateUrl: `templates/calendar.html`
	  });