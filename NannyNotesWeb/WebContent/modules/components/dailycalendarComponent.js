
angular.module("NannyNotesApp")
.component('dailycalendarComponent', {
	controller : function(moment, alert, calendarConfig, $http, householdService, shiftService) {  
		var vm = this;
//		vm.newShift = "";
//	    vm.shifts = [];
//		var household = householdService.getCurrentHousehold();
//	    vm.loadShifts = function(){
//	    	shiftService.getShifts(vm.household)
//	    	.then(function(response){
//	    		console.log(response);
//	    		vm.shifts = response.data;
//	    	}).catch(function(err){
//	    		console.log('in get error');
//	    	});
//	    }
//	    vm.loadShifts();
//	    vm.loadShift = function(id){
//	    	shiftService.getShift(id)
//	    	.then(function(response){
//	    		console.log(response);
//	    		vm.shift = response.data;
//	    	}).catch(function(err){
//	    		console.log('in get error');
//	    	});
//	    }
//
//	    vm.addShift = function(shift) {
//	      shiftService.createShift(shift)
//	      .then(function(response){
//	    	 vm.newShift = ""; 
//	    	  vm.loadShifts();
//
//	      }).catch(function(err){
//	  		console.log('in add error');
//	  	});
//	    };
//	    vm.destroyShift = function(id) {
//	    	shiftService.deleteShift(id)
//	    	.then(function(response){
//	    		vm.shifts = response.data; 
//	    		vm.loadShifts();
//	    		console.log("in destroy shifts component function");
//	    	}).catch(function(err){
//	    		console.log('in destroy error');
//	    	});
//	    };
//	    vm.editShift = function(id, shift) {
//	    	shiftService.updateShift()
//	    	.then(function(response){
//	    		vm.shift = response.data; 
//	    		
//	    		console.log("in update shifts component function");
//	    	}).catch(function(err){
//	    		console.log('in edit error');
//	    	});
//	    };
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
    vm.events = [
      {
        title: 'An event',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: 'This is a really long event title that occurs on every year',
        color: calendarConfig.colorTypes.important,
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
        title: 'New event',
        startsAt: moment().startOf('day').toDate(),
        endsAt: moment().endOf('day').toDate(),
        color: calendarConfig.colorTypes.important,
        draggable: true,
        resizable: true
      });
    };

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
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