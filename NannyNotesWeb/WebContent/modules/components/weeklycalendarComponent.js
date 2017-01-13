angular.module("NannyNotesApp")
.component('weeklycalendarComponent', {
	controller : function(shiftService) {
	    var vm = this;
	    vm.newShift = "";
	    vm.shifts = [];

	    vm.loadShifts = function(){
	    	shiftService.getShifts()
	    	.then(function(response){
	    		console.log(response);
	    		vm.shifts = response.data;
	    	}).catch(function(err){
	    		console.log('in get error');
	    	});
	    }
	    vm.loadShifts();
	    vm.loadShift = function(id){
	    	shiftService.getShift(id)
	    	.then(function(response){
	    		console.log(response);
	    		vm.shift = response.data;
	    	}).catch(function(err){
	    		console.log('in get error');
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
	 template : 
		 		`
		 		<nav-component></nav-component>
		 		<dashboard-component></dashboard-component>
    <!-- main right col -->
        <div class="column col-sm-9 col-xs-11" id="main">
            <p><a href="#" data-toggle="offcanvas"><i class="fa fa-navicon fa-2x"></i></a></p>
            <p>
                Main content...
		 <div id="dp"></div>
		 
		 <script type="text/javascript">
		 
		 var dp = new DayPilot.Calendar("dp");
		 dp.viewType = "Week";
		 dp.init();
		 
		 </script>
            </p>
		 		`
});