angular.module("NannyNotesApp")
.component('dashboardComponent', {
	controller : function() {
	    var vm = this;
	    /* off-canvas sidebar toggle */
	    $('[data-toggle=offcanvas]').click(function() {
	        $('.row-offcanvas').toggleClass('active');
	        $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
	    });
	  },
	 template : `
<div class="wrapper">
    <div class="row row-offcanvas row-offcanvas-left">
        <!-- sidebar -->
        <div class="column col-sm-3 col-xs-1 sidebar-offcanvas" id="sidebar">
            <ul class="nav" id="menu">
                <li><a href="#"><i class="fa fa-list-alt"></i> <span class="collapse in hidden-xs">Household</span></a></li>
                <li>
                
                    <a data-target="#item1" data-toggle="collapse"><i class="fa fa-list"></i> <span class="collapse in hidden-xs">Schedule <span class="caret"></span></span></a>
                    <ul class="nav nav-stacked collapse left-submenu" id="item1">
                        <li><a href="/dailycalendar">Daily</a></li>
                        <li><a href="/weeklycalendar">Weekly</a></li>
		 				<li><a href="/monthlycalendar">Monthly</a></li>
                    </ul>
                </li>
		 <li><a href="/notes"><i class="fa fa-paperclip"></i> <span class="collapse in hidden-xs">Notes</span></a></li>
            </ul>
        </div>
        <!-- /sidebar -->

        <!-- main right col -->
        <div class="column col-sm-9 col-xs-11" id="main">
            <p><a href="#" data-toggle="offcanvas"><i class="fa fa-navicon fa-2x"></i></a></p>
            <p>
                Main content...
            </p>
		 		`
});