angular.module("NannyNotesApp")
.component('weeklycalendarComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : 
		 		`
		 		<nav-component></nav-component>
		 		<dashboard-component></dashboard-component>
	 <div id="dp"></div>

	 <script type="text/javascript">
  
	 var dp = new DayPilot.Calendar("dp");
	 dp.viewType = "Week";
	 dp.init();

	 </script>
		 		`
});