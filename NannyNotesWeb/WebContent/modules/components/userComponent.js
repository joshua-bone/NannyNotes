angular.module("NannyNotesApp")
.component('userComponent', {
	controller : function(authenticationService, userService) {
		  var vm = this;
//		    vm.user.newHousehold = "";
		    var currentUser = authenticationService.currentUser();
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
		    vm.getUser();
		    console.log(currentUser);
		    console.log(vm.user);
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
