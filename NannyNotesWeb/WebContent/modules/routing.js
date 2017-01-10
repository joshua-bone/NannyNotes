angular.module('ngRoute')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<household-component></household-component>`
            })
            .when('/dailycalendar', {
            	template: `<dailycalendar-component></dailycalendar-component>`
            })
            .when('/household', {
            	template: `<household-component></household-component>`
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
            .when('/contact', {
                template: `<h1>Contact!</h1>`
            })
            .otherwise({
                redirectTo: '/' // redirect to index route
            });
    });
