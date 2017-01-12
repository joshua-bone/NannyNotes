angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function(householdService, $location) {
		  var vm = this;
//		    vm.newHousehold = {};
		    vm.name = "";
		    vm.households = [];

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
		    		console.log(response);
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
//		    vm.destroyHousehold = function(id) {
//		    	householdService.deleteHousehold(id)
//		    	.then(function(response){
//		    		vm.households = response.data; 
//		    		vm.loadHouseholds();
//		    		console.log("in households component");
//		    	}).catch(function(err){
//		    		console.log('in destroy error');
//		    	});
//		    };
//		    vm.editHousehold = function(id, household) {
//		    	householdService.updateHousehold()
//		    	.then(function(response){
//		    		vm.household = response.data; 
//		    		
//		    		console.log("in households component");
//		    	}).catch(function(err){
//		    		console.log('in edit error');
//		    	});
//		    };
//		    
	  },
	 template : `
	 <nav-component></nav-component>
	 <dashboard-component></dashboard-component>
  <!-- main right col -->
      <div class="column col-sm-9 col-xs-11" id="main">
          <p><a href="#" data-toggle="offcanvas"><i class="fa fa-navicon fa-2x"></i></a></p>
          <p>
          <input type="text" ng-model="$ctrl.name"></input>
          <button type="submit" ng-click="$ctrl.addHousehold($ctrl.name)">Add Household</button>
          
              <table class="householdview" ng-repeat="household in $ctrl.households">
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
