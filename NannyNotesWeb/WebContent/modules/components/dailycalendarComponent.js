angular.module("NannyNotesApp")
    .component('dailycalendarComponent', {
        controller: function(moment, alert, calendarConfig, $http, householdService, userService, eventService) {
            var vm = this;
            vm.household = householdService.getCurrentHousehold();


            vm.getEvents = function(household) {
                eventService.getEvents(household)
                    .then(function(response) {
                        response.data.forEach(function(e) { //convert the dates to Javascript dates
                            e.startsAt = new Date(e.startsAt);
                            e.endsAt = new Date(e.endsAt);
                        });
                        vm.events = response.data;
                    }).catch(function(err) {
                        console.log('in getEvents error (dailyCalendarComp)');
                    });
            }



            vm.user = userService.getCurrentUser();
            vm.events = vm.getEvents(vm.household);
            vm.newEvent = {};
            //	vm.newEvent.household = vm.household;
            vm.newEvent.startOpen = true;
            vm.showNewEventForm = false;

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

            vm.toggleNewEventForm = function() {
                vm.showNewEventForm = !vm.showNewEventForm;
            }
            vm.cellIsOpen = true;

            vm.addEvent = function(newEvent) {
                newEvent.household = vm.household;
                eventService.createEvent(newEvent)
                    .then(function(response) {
                        vm.getEvents(vm.household);
                        vm.showNewEventForm = false;
                    }).catch(function(err) {
                        console.log('in add event error');
                    });
            };

						vm.updateEvent = function(newEvent){
							eventService.updateEvent(newEvent).then(function(result){
								vm.getEvents(vm.household);
							})
						}

						vm.deleteEvent = function(event){
							if (event.id){
								eventService.deleteEvent(event).then(function(){
									vm.getEvents(vm.household);
								});
							}
						}

            vm.eventClicked = function(event) {
                alert.editEvent(vm.updateEvent, vm.deleteEvent, event);
            };

            // vm.eventEdited = function(event) {
            //     alert.show('Edited', event);
            //     eventService.updateEvent(event)
            //         .then(function(response) {
            //             vm.event = response.data;
            //             console.log("in update events component function");
            //         }).catch(function(err) {
            //             console.log('in edit error');
            //         });
            // };
						//
            // vm.eventDeleted = function(event) {
            //     alert.show('Deleted', event);
            //     eventService.deleteEvent(event)
            //         .then(function(response) {
            //             vm.events = response.data;
            //             console.log("in destroy events component function");
            //         }).catch(function(err) {
            //             console.log('in destroy error');
            //         });
            // };

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
                } else if (vm.calendarView === 'day') {
									var d = new Date(date._d);
									var d2 = new Date(date._d);
									d2.setHours(d2.getHours() + 1);
									var newEvent = {
										"title" : "New Event",
										"startsAt" : d,
										"endsAt" : d2,
										"household" : vm.household
									};
									alert.editEvent(vm.addEvent, vm.deleteEvent, newEvent);
								}

            };
        },
        templateUrl: `templates/calendar.html`
    });
