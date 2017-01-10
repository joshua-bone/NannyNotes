angular.module("NannyNotesApp")
.component('monthlycalendarComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : `
	 <nav-component></nav-component>
	 <dashboard-component></dashboard-component>
	 <div id="dp"></div>

<script type="text/javascript">

  var dp = new DayPilot.Month("dp");
  dp.init();

</script>
		 		`
});