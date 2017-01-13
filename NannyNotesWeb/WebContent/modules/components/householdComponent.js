angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function(householdService, userService, authenticationService, $location, $scope) {
		  var vm = this;
//		    vm.newHousehold = {};
		    vm.user = userService.getCurrentUser();

		    //vm.households = [];

				//custom filter for ng-repeat directive
				vm.notInUserHHs = function(hh){
					if (!hh) return false;
					var include = true;
					for (var i = 0; i < vm.user.households.length; i++){
						if (vm.user.households[i].id===hh.id) include = false;
					}
					return include;
				}

				vm.addHouseholdToUserList = function(){
					var id = $('#sol-household').find(':selected')[0].value;
					var hh = {};
					for (var i = 0; i < vm.households.length; i++){
						if (id == vm.households[i].id){
							hh = vm.households[i];
							break;
						}
					}
					vm.user.households.push(hh);
				}

				vm.removeHouseholdFromUserList = function(household){
					vm.user.households.splice(vm.user.households.indexOf(household), 1);
				}

		    vm.loadHouseholds = function(){
		    	householdService.getHouseholds()
		    	.then(function(response){
		    		vm.households = response.data;
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }
		    vm.loadHouseholds();

		    vm.loadHousehold = function(id){
		    	householdService.getHousehold(id)
		    	.then(function(response){
		    		vm.household = response.data;
		    		$location.path("/households/{id}")
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }

				vm.selectHousehold = function(household){
					householdService.setCurrentHousehold(household);
					userService.updateUser(vm.user).then(function(response){
						if (response.status < 400){
							$location.path('/users/{response.data.id}');
						}
					});
				}

		    vm.addHousehold = function(household) {
		      householdService.createHousehold(household)
		      .then(function(response){
		    	  vm.loadHouseholds();
						vm.user.households.push(response.data);
		      }).catch(function(err){
		  			console.log('in add hh error');
						console.log(err);
		  	});
		    };
		    vm.destroyHousehold = function(id) {
		    	householdService.deleteHousehold(id)
		    	.then(function(response){
		    		vm.households = response.data;
		    		vm.loadHouseholds();
		    	}).catch(function(err){
		    		console.log('in destroy error');
		    	});
		    };
		    vm.editHousehold = function(id, household) {
		    	householdService.updateHousehold()
		    	.then(function(response){
		    		vm.household = response.data;
		    	}).catch(function(err){
		    		console.log('in edit error');
		    	});
		    };
	  },
	 templateUrl : 'templates/chooseHouseholdView.html'
});
