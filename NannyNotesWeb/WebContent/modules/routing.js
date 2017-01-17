angular.module('NannyNotesApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
              template: `<household-component></household-component>`
            })
            .when('/household', {
            	template: `<user-component></user-component>`
            })
            .when('/calendar', {
            	template: `<dailycalendar-component></dailycalendar-component>`
            })
            .when('/notes', {
            	template: `<notes-component></notes-component>`
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .when('/login', {
                template: `<login-component></login-component>`
            })
            .otherwise({
                redirectTo: '/' // redirect to index route
            });
    })
      .run(['$rootScope', '$location', 'authenticationService', function($rootScope, $location, authenticationService){
        $rootScope.$on("$routeChangeStart", function(event, next, current){
            if ($location.path() != '/login' && !authenticationService.isLoggedIn()) {
              console.log('DENY : Redirecting to Login');
              event.preventDefault();
              $location.path('/login');
            } else if ($location.path() == '/login' && authenticationService.isLoggedIn()){
              console.log('DENY : Already Logged In');
              event.preventDefault();
              $location.path('/');
            }
        });
      }]);
