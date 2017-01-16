
angular.module("NannyNotesApp")
.component('weeklycalendarComponent', {
	controller : function(moment, alert, calendarConfig, $http, householdService, shiftService) {  
		var vm = this;
		vm.calendarTitle= "Shift Schedule";
		vm.household = householdService.getCurrentHousehold();
	    vm.events = [ {
	        "id": 1,
	        "nannyNotes": "",
	        "parentNotes": "",
	        "startDateTime": 1484506800000,
	        "endDateTime": 1484485200000
	      },  {
	    	    "id": 2,
	    	    "nannyNotes": "",
	    	    "parentNotes": "",
	    	    "startDateTime": 1484506800000,
	    	    "endDateTime": 1484485200000
	    	  },  {
	    		    "id": 3,
	    		    "nannyNotes": "",
	    		    "parentNotes": "",
	    		    "startDateTime": 1484506800000,
	    		    "endDateTime": 1484485200000
	    		  }];
// vm.loadShifts = function(){
// shiftService.getShifts(vm.household)
// .then(function(response){
// console.log(response);
// vm.shifts = response.data;
// }).catch(function(err){
// console.log('in get error');
// });
// }
    // These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'week';
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
    vm.events = [
      {
        id: 1,
        nannyNotes: "he wouldn't take his vitamins",
        parentNotes: "don't feed the squirrels",
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        id: 2,
        color: calendarConfig.colorTypes.info,
        nannyNotes: "I need the hair of the dog",
        parentNotes: "take a sip off our Jose Cuervo",
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        id: 3,
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

    vm.cellIsOpen = true;

    vm.addEvent = function() {
      vm.events.push({
    	  
    	nannyNotes: "",
        parentNotes: "",
        startsAt: moment().startOf('day').toDate(),
        endsAt: moment().endOf('day').toDate(),
        color: calendarConfig.colorTypes.important,
        draggable: true,
        resizable: true
      });
	      shiftService.createShift(vm.events[vm.events.length-1])
	      .then(function(response){
	    	 vm.newShift = ""; 
	      }).catch(function(err){
	  		console.log('in add error');
	  	});
    };

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
  	shiftService.getShift(event)
  	.then(function(response){
  		vm.event = response.data;
  		console.log("in show event component function");
  	}).catch(function(err){
  		console.log('in get error');
  	});
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
  	shiftService.updateShift(event)
  	.then(function(response){
  		vm.event = response.data; 
  		console.log("in update events component function");
  	}).catch(function(err){
  		console.log('in edit error');
  	});
  };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
	    	shiftService.deleteShift(event)
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