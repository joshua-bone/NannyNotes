angular.module("NannyNotesApp")
.component('householdComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : `
	 <nav-component></nav-component>
	 <dashboard-component></dashboard-component>
		 		`
});