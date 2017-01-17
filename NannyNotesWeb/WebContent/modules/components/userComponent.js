angular.module("NannyNotesApp")
.component('userComponent', {
	controller : function(authenticationService, userService, householdService, $location) {
		  var vm = this;

		    vm.getUser = function(id){
		    	userService.getUser(currentUser.id)
		    	.then(function(response){
		    		vm.user =response.data;
		    		console.log(response.data);
		    		console.log('in get user component function');
//				    vm.user.households = [{
//				        "id": 500,
//				        "name": "The Gore family",
//				        "parentNotes": "Please remember that Alfonso has plot practice this week.",
//				        "nannyNotes": "I've been having trouble with Jude segmenting with the smoother strikers lately."
//				      }];
		    	}).catch(function(err){
		    		console.log('in get user component error');
		    	});
		    }

		  vm.destroyHousehold = function(id) {
	    	householdService.deleteHousehold(id)
	    	.then(function(response){
	    		vm.households = response.data;
	    		vm.loadHouseholds();
	    		console.log("in users component calling household service");
	    	}).catch(function(err){
	    		console.log('in destroy error');
	    	});
	    };

	    vm.editHousehold = function(household) {
	    	householdService.updateHousehold(household)
	    	.then(function(response){
	    		vm.household = response.data;

	    		console.log("in users component calling household service");
	    	}).catch(function(err){
	    		console.log('in edit error');
	    	});
	    };

	    vm.getChildren = function(household){
	    	householdService.getHouseholdChildren(household)
	    	.then(function(response){
	    		vm.children = response.data;
	    	}).catch(function(err){
	    		console.log('in getChildren error (userComponent)');
	    	});
	    }

			vm.getUsers = function(household){
				householdService.getHouseholdUsers(household)
				.then(function(response){
					vm.users = response.data;
				}).catch(function(err){
					console.log('in getUsers error (userComponent)');
				});
			}

			vm.getShifts = function(household){
				householdService.getHouseholdChildren(household)
				.then(function(response){
					vm.shifts = response.data;
				}).catch(function(err){
					console.log('in getShifts error (userComponent)');
				});
			}

			vm.removeChild = function(child){
				householdService.removeChild(child)
				.then(function(response){
					vm.getChildren(vm.household);
				}).catch(function(err){
					console.log('error in removeChild() (userComponent)');
				});
			}

			vm.addChild = function(){
				householdService.addChild(vm.household, vm.newChild)
				.then(function(response){
					vm.getChildren(vm.household);
					vm.newChild = {};
					vm.showNewChildForm = false;
				}).catch(function(err){
					console.log('error in addChild() (userComponent)');
				});
			}

			vm.toggleNewChildForm = function(){
				vm.showNewChildForm = !vm.showNewChildForm;
			}

			vm.user = userService.getCurrentUser();
			if (!vm.user.households) { //this happens on page refresh
				userService.updateCurrentUser().then(function(){
					$location.path("/"); //redirect to select household screen
				});
			}
			vm.household = householdService.getCurrentHousehold();
			vm.getChildren(vm.household);
			vm.getUsers(vm.household);
			vm.getShifts(vm.household);
			vm.newChild={};
			vm.showNewChildForm = false;

	  },
	 templateUrl : 'templates/viewUpdateHousehold.html'

});
