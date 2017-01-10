angular.module("NannyNotesApp")
.component('navComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : `
	 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#!/">NannyNotes</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="#!/about">About</a></li>
      <li><a href="#!/logout">Sign Out</a></li>
    </ul>
  </div>
</nav>
		 		`
});