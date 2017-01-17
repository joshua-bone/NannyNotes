angular.module("NannyNotesApp")
.component('notesComponent', {
	controller : function(authenticationService, userService, householdService) {
		  var vm = this;

		    vm.getUser = function(id){
		    	userService.getUser(currentUser.id)
		    	.then(function(response){
		    		vm.user =response.data;
		    		console.log(response.data);
		    		console.log('in get user component function');
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
	    		console.log('in getChildren error');
	    	});

	    }
	    vm.household = householdService.getCurrentHousehold();
	    vm.updateChild = function(child){
	    	child.householdId= vm.household.id;
	    	householdService.updateChild(child)
	    	.then(function(response){
	    		vm.child = response.data;
	    		console.log(vm.child);
	    		console.log("in users component calling household service's update child");
	    	}).catch(function(err){
	    		console.log('in updateChildren error');
	    	});

	    }
			vm.user = userService.getCurrentUser();
			vm.children = vm.getChildren(vm.household);

	  },
		 templateUrl : 'templates/viewUpdateNotes.html'
});
