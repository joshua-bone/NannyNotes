angular.module("NannyNotesApp")
    .component('navComponent', {
        controller: function($location, userService, authenticationService, $scope) {
            var vm = this;
            vm.loggedIn = authenticationService.isLoggedIn();
            vm.user = userService.getCurrentUser();
            vm.logout = function() {
                authenticationService.logout();
                $location.path('/login');
                //$scope.apply();
            };
        },
        template: `
  <div class="container-fluid">
	<nav class="navbar navbar-inverse bg-inverse">
    <div class="navbar-header">
			<img src="http://i.imgur.com/J71Xamn.jpg" style="width:50px"/>
      <a class="navbar-brand" href="#!/">NannyNotes</a>
    </div>
    <ul class="nav navbar-nav" ng-show="$ctrl.loggedIn">
      <li><a href="#!/about">About</a></li>
      <li><a href="" ng-click="$ctrl.logout()">Sign Out</a></li>
      <li><a href="" ng-click="">Signed in as {{$ctrl.user.username}} (Role: {{$ctrl.user.role}})</a></li>
    </ul>
		<ul class="nav navbar-nav" ng-show="!$ctrl.loggedIn">
      <li><a href="">Sign In</a></li>
			<li><a href="">Create Account</a></li>
    </ul>
		</nav>
  </div>
		 		`
    });
