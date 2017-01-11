angular.module("NannyNotesApp")
.component('navComponent', {
	controller : function($location, authenticationService) {
	    var vm = this;
			vm.loggedIn = authenticationService.isLoggedIn();
			vm.logout = function($scope){
				authenticationService.logout();
				$location.path('/login');
				//$scope.apply();
				}

	  },
	 template : `
	 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
			<img src="http://i.imgur.com/J71Xamn.jpg" style="width:50px"/>
      <a class="navbar-brand" href="#!/">NannyNotes</a>
    </div>
    <ul class="nav navbar-nav" ng-show="$ctrl.loggedIn">
      <li><a href="#!/about">About</a></li>
      <li><a href="" ng-click="$ctrl.logout()">Sign Out</a></li>
    </ul>
		<ul class="nav navbar-nav" ng-show="!$ctrl.loggedIn">
      <li><a href="#sign-in-to-account">Sign In</a></li>
			<li><a href="#create-new-account">Create Account</a></li>
    </ul>
  </div>
</nav>
		 		`
});
