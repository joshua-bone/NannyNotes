angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function(householdService, authenticationService) {
		  var vm = this;
//		    vm.user.newHousehold = "";
		    vm.user = authenticationService.currentUser();
//		    vm.user.households = [{
//		    	"id": 1,
//		    	"name": "family robinson",
//		    	"parentNotes": null,
//		    	"nannyNotes": null,
//		    	"children": []
//		    },
//		    {
//		    	"id": 2,
//		    	"name": "Adam's Family",
//		    	"parentNotes": null,
//		    	"nannyNotes": "Too many bats and cobwebs in the house. Also beware of cousin Itt",
//		    	"children": []
//		    }];
		    console.log(vm.user);
		    console.log(vm.user.households)
		    vm.loadHouseholds = function(){
		    	householdService.getHouseholds()
		    	.then(function(response){
		    		//console.log(response);
		    		vm.households = response.data;
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }
		    vm.loadHouseholds();
		    vm.loadHousehold = function(id){
		    	householdService.getHousehold(id)
		    	.then(function(response){
		    		console.log(response);
		    		vm.household = response.data;
		    	}).catch(function(err){
		    		console.log('in get error');
		    	});
		    }

		    vm.addHousehold = function(household) {
		      householdService.createHousehold(household)
		      .then(function(response){
		    	 vm.user.newHousehold = "";
		    	  vm.loadHouseholds();

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
	 template : `
	 <nav-component></nav-component>
	 <dashboard-component></dashboard-component>
    <!-- main right col -->
        <div class="column col-sm-9 col-xs-11" id="main">
            <p><a href="#" data-toggle="offcanvas"><i class="fa fa-navicon fa-2x"></i></a></p>
            <p>
                <table class="householdview" ng-repeat="household in $ctrl.user.households">
      <tr class="householdview">
       <th class="householdview"><h3>Household </h3></th>
        <th class="householdview"><h3>Parents </h3></th>
		 <th class="householdview"><h3>Parent Notes </h3></th>
        <th class="householdview"><h3>Guardians </h3></th>
		 <th class="householdview"><h3>Guardian Notes </h3></th>
        <th class="householdview"><h3>Children </h3></th>
      </tr>
      <tr class="householdview">
		 <td class="householdview">{{household.name}}</td>
		 <td class="householdview">{{household.users}}</td>
		 <td class="householdview">{{household.parentNotes}}</td>
		 <td class="householdview">{{household.users}}</td>
		 <td class="householdview">{{household.nannyNotes}}</td>
        <td class="householdview">{{household.children}}</td>
        </tr> 
  </table> 
            </p>
		 		`
		 
});
	  //		 		<td class="householdview">{{household.users.NANNY}}</td>
	  //		 		<td class="householdview">{{household.users.PARENT}}</td>
