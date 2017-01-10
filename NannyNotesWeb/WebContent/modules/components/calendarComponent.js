angular.module("NannyNotesApp")
.component('calendarComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : `
	 <nav-component></nav-component>
	 <dashboard-component></dashboard-component>
	 
		 		`
});