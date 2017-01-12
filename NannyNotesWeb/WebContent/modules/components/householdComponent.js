angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function(householdService, userService, $location) {
		  var vm = this;
//		    vm.newHousehold = {};
		    vm.name = "";
		    vm.households = [];

		    vm.getUser = function(id){
		    	userService.getUser(currentUser.id)
		    	.then(function(response){
		    		vm.user =response.data;
		    		console.log(response.data);
		    		console.log('in get user component function');
		    		$location.path('/users/' + id);
		    	}).catch(function(err){
		    		console.log('in get user component error');
		    	});
		    }
		    vm.getUser();
		    console.log(currentUser);
		    console.log(vm.user);
		    
		    vm.loadHouseholds = function(){
		    	householdService.getHouseholds()
		    	.then(function(response){
		    		console.log(response);
		    		vm.households = response.data;
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }
		    vm.loadHouseholds();

		    vm.loadHousehold = function(id){
		    	householdService.getHousehold(id)
		    	.then(function(response){
		    		console.log("vm.loadHousehold" + response);
		    		vm.household = response.data;
		    		$location.path("/households/{id}")
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }

		    vm.addHousehold = function(household) {
		    	household.name= vm.name;
		      householdService.createHousehold(household)
		      .then(function(response){
		    	 vm.name = "";
		    	  vm.loadHouseholds();
//		    	  console.log(vm.households);
		      }).catch(function(err){
		  		console.log('in add error');
		  	});
		    };
		    vm.destroyHousehold = function(id) {
		    	householdService.deleteHousehold(id)
		    	.then(function(response){
		    		vm.households = response.data;
		    		vm.loadHouseholds();
		    		console.log("in households component");
		    	}).catch(function(err){
		    		console.log('in destroy error');
		    	});
		    };
		    vm.editHousehold = function(id, household) {
		    	householdService.updateHousehold()
		    	.then(function(response){
		    		vm.household = response.data;

		    		console.log("in households component");
		    	}).catch(function(err){
		    		console.log('in edit error');
		    	});
		    };
	  },
	 templateURL : 'templates/chooseHouseholdView.html'

});
