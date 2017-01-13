angular.module("NannyNotesApp")
.component('dailycalendarComponent', {
	controller : function(shiftService, householdService) {
	    var vm = this;
	    vm.newShift = {};
	    vm.shifts = [];
	    vm.household= {
	        "id": 500,
	        "name": "The Gore family",
	        "parentNotes": "Please remember that Alfonso has plot practice this week.",
	        "nannyNotes": "I've been having trouble with Jude segmenting with the smoother strikers lately."
	      };

	    vm.loadShifts = function(){
	    	householdService.getHouseholdShifts(vm.household)
	    	.then(function(response){
	    		console.log(response.data);
	    		vm.shifts = response.data;
	    	}).catch(function(err){
	    		console.log('in get error of load shifts in daily component');
	    	});
	    }
	    vm.loadShifts();
	    vm.loadShift = function(id){
	    	shiftService.getShift(id)
	    	.then(function(response){
	    		console.log(response);
	    		vm.shift = response.data;
	    	}).catch(function(err){
	    		console.log('in get error of load shift in daily component');
	    	});
	    }

	    vm.addShift = function(shift) {
	      shiftService.createShift(shift)
	      .then(function(response){
	    	 vm.newShift = ""; 
	    	  vm.loadShifts();

	      }).catch(function(err){
	  		console.log('in add error');
	  	});
	    };
	    vm.destroyShift = function(id) {
	    	shiftService.deleteShift(id)
	    	.then(function(response){
	    		vm.shifts = response.data; 
	    		vm.loadShifts();
	    		console.log("in destroy shifts component function");
	    	}).catch(function(err){
	    		console.log('in destroy error');
	    	});
	    };
	    vm.editShift = function(id, shift) {
	    	shiftService.updateShift()
	    	.then(function(response){
	    		vm.shift = response.data; 
	    		
	    		console.log("in update shifts component function");
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
                              <table class="householdview" ng-repeat="shift in $ctrl.shifts">
      <tr class="householdview">
       <th class="householdview"><h3>Shift Id: </h3></th>
        <th class="householdview"><h3>Nanny Notes </h3></th>
		 <th class="householdview"><h3>Parent Notes </h3></th>
        <th class="householdview"><h3>Start Date </h3></th>
		 <th class="householdview"><h3>End Date </h3></th>
      </tr>
      <tr class="householdview">
		 <td class="householdview">{{shift.id}}</td>
		 <td class="householdview">{{shift.nannyNotes}}</td>
		 <td class="householdview">{{shift.parentNotes}}</td>
		 <td class="householdview">{{shift.startDateTime}}</td>
		 <td class="householdview">{{shift.endDateTime}}</td>
        </tr> 
  </table> 
                <h1>Stuff should appear here</h1>
		 <div id="dp" events="$ctrl.shifts"></div>
		 
		 <script type="text/javascript">
		 
		 var dp = new DayPilot.Calendar("dp");
		 dp.viewType = "Day";
		 dp.init();
		 
		 </script>

            </p>


		 		`
});