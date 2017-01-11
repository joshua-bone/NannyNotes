angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function(householdService) {
		  var vm = this;
		    vm.newHousehold = "";
		    vm.households = [];

//		    vm.loadHouseholds = function(){
//		    	householdService.getHouseholds()
//		    	.then(function(response){
//		    		console.log(response);
//		    		vm.households = response.data;
//		    	}).catch(function(err){
//		    		console.log('in get error');
//		    	});
//		    }
//		    vm.loadHouseholds();
		    vm.loadHousehold = function(){
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
		    	 vm.newHousehold = ""; 
//		    	  vm.loadHouseholds();

		      }).catch(function(err){
		  		console.log('in add error');
		  	});
		    };
		    vm.destroyHousehold = function(id) {
		    	householdService.deleteHousehold(id)
		    	.then(function(response){
		    		vm.households = response.data; 
//		    		vm.loadHouseholds();
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
                <table class="">
      <tr>
        <th><h1>Parents </h1></th>
        <th><h1>Guardians </h1></th>
        <th><h1>Children </h1></th>
      </tr>
      <tr ng-class="household" ng-repeat="household in $ctrl.data">
        <td>{{household.users.PARENT}}</td>
        <td>{{household.users.NANNY}}</td>
        <td>{{household.child}}</td>
        </tr> 
  </table> 
            </p>
		 		`
});