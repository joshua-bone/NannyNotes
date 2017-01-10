angular.module('ngRoute')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<household-component></household-component>`
            })
            .when('/dailycalendar', {
            	template: `<dailycalendar-component></dailycalendar-component>`
            })
            .when('/weeklycalendar', {
            	template: `<weeklycalendar-component></weeklycalendar-component>`
            })
            .when('/monthlycalendar', {
            	template: `<monthlycalendar-component></monthlycalendar-component>`
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
