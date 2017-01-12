angular.module("NannyNotesApp")
.component('userComponent', {
	controller : function(authenticationService) {
		  var vm = this;
//		    vm.user.newHousehold = "";
		    vm.user = authenticationService.currentUser();
		    vm.user.households = [{
		    "id": 1,
		    "name": "family robinson",
		    "parentNotes": "update 10",
		    "nannyNotes": null,
		    "children": [
		      {
		        "id": 1,
		        "name": "Jaime",
		        "age": 7,
		        "parentNotes": null,
		        "nannyNotes": null
		      }
		    ],
		    "shifts": []
		  },
		  {
		    "id": 2,
		    "name": "Adam's Family Values",
		    "parentNotes": null,
		    "nannyNotes": "Too many bats and cobwebs in the house. Also beware of cousin Itt",
		    "children": [],
		    "shifts": []
		  }];
		    console.log(vm.user);
		    console.log(vm.user.households)
		   
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
