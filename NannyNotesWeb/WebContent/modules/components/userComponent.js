angular.module("NannyNotesApp")
.component('userComponent', {
	controller : function(authenticationService, userService, householdService) {
		  var vm = this;

		    var currentUser = authenticationService.currentUser();
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
		    vm.getUser();
		    console.log(currentUser);
		    console.log(vm.user);
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
	    		console.log(vm.children);
	    		console.log("in users component calling household service");
	    	}).catch(function(err){
	    		console.log('in getChildren error');
	    	});
	    	
	    }
	    
		   
	  },
	 templateUrl : 'templates/viewUpdateHousehold.html'
		 
});
