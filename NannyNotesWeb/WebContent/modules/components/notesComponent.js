angular.module("NannyNotesApp")
.component('notesComponent', {
	controller : function() {
	    var vm = this;
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
                <h1> NOTES! </h1>
            </p>
		 		`
		 
});