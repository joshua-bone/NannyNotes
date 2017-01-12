angular.module('NannyNotesApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<household-component></household-component>`
            })
            .when('/dailycalendar', {
            	template: `<dailycalendar-component></dailycalendar-component>`
            })
            .when('/households', {
            	template: `<household-component></household-component>`
            })
            .when('/users/:id', {
<<<<<<< HEAD
            	template: `<user-component></user-component>`
=======
            	template: `<household-component></household-component>`
            })
            .when('/households/:id', {
            	template: `<household-component></household-component>`
            })
            .when('/shifts/:id', {
            	template: `<shift-component></shift-component>`
>>>>>>> ad6933685181756e2a48c2da419304d0cc0147a4
            })
            .when('/weeklycalendar', {
            	template: `<weeklycalendar-component></weeklycalendar-component>`
            })
            .when('/monthlycalendar', {
            	template: `<monthlycalendar-component></monthlycalendar-component>`
            })
            .when('/notes', {
            	template: `<notes-component></notes-component>`
            })
            .when('/about', {
                template: '<nav-component></nav-component><dashboard-component></dashboard-component><h1>About!</h1>'
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



    // .run(['$rootScope', '$location', 'authenticationService', function ($rootScope, $location, authenticationService) {
    //         $rootScope.$on('$routeChangeStart', function (event) {
    //         console.log('In Login Redirect')
    //         if (!authenticationService.isLoggedIn()) {
    //           console.log('DENY : Redirecting to Login');
    //           event.preventDefault();
    //           $location.path('/login');
    //         }
    //         else {
    //           console.log('ALLOW');
    //         }
    //   });
    // }]);
