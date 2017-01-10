angular.module('ngRoute')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<h1>Home!</h1>`
            })
            .when('/about', {
                template: `<h1>About!</h1>`
            })
            .when('/contact', {
                template: `<h1>Contact!</h1>`
            })
            .otherwise({
                redirectTo: '/' // redirect to index route
            });
    });
