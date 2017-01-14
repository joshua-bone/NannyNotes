angular.module("NannyNotesApp")
.component('loginComponent', {
	controller : function(userService, authenticationService, $window, $location, $scope) {
		  var vm = this;
      vm.signInUser = {};
      vm.createUser = {"role" : "PARENT"};
      vm.create = function(){
        if (vm.createUser.password === vm.createUser.confirmpassword){
          delete vm.createUser.confirmpassword;
          userService.createUser(vm.createUser)
          .then(function(response){
            if (response.status < 400){
              authenticationService.login(vm.createUser).then(function(){
								userService.updateCurrentUser().then(function(){
									$location.path("/");
								});
              });
              vm.createUser = {"role" : "PARENT"};
            }
          }).catch(function(err){
            console.log('loginComponent createUser error');
          });
        }

      };
      vm.signIn = function(){
        authenticationService.login(vm.signInUser).then(function(){
					userService.updateCurrentUser().then(function(){
						$location.path("/");
					});
        });

      }
	  },
  //  bindings : {
  //   signInUser : '='
  //  },
	 template : `
   <nav-component></nav-component>
	 <div class="container-fluid">
    <div class="row">

      <div class="col-sm-6" id="sign-in-to-account">
        <div class="border-panel">
          <h3 class="text-center">
            Sign In With Existing Account
          </h3>
          <hr>
          <form name="signInForm" ng-submit="$ctrl.signIn()" novalidate>
            <input type="text" ng-model="$ctrl.signInUser.username" class="form-control" placeholder="Username" required></input>
            <input type="password" ng-model="$ctrl.signInUser.password" class="form-control" placeholder = "Password" required></input><hr>
            <input type="submit" value="Sign In" class="btn btn-primary" ng-disabled="signInForm.$invalid"></input>
          </form>
        </div>
      </div>

      <div class="col-sm-6" id="create-new-account">
        <div class="border-panel">
          <h3 class="text-center">
              Create a New Account
          </h3>
          <hr>
          <form name="createForm" ng-submit="$ctrl.create()" novalidate>
            <input type="text" class="form-control" ng-model="$ctrl.createUser.username" placeholder="Username" required></input>
            <input type="password" class="form-control" ng-model="$ctrl.createUser.password" placeholder = "Password" required></input>
            <input type="password" class="form-control" ng-model="$ctrl.createUser.confirmpassword" placeholder = "Confirm Password" required></input><hr>
            <input type="text" class="form-control" ng-model="$ctrl.createUser.name" placeholder = "Real Name" required></input><br>
            I am a:
            <select ng-model="$ctrl.createUser.role">
              <option value="PARENT" selected="selected">Parent</option>
              <option value="NANNY">Nanny</option>
            </select>
            <hr>
            <input type="submit" value="Create Account" class="btn btn-primary" ng-disabled="createForm.$invalid"></input>
          </form>
        </div>
      </div>

    </div>
   </div>
		 		`
});
