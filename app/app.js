'use strict';

angular.module('evo_tracker',['ngRoute', 'ngStorage'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: "app/templates/home.html",
                controller: "home_controller"
            })
            .when('/activities', {
                templateUrl: "app/templates/activities.html",
                controller: "activities_controller"
            })
            .when('/results', {
                templateUrl: "app/templates/results.html",
                controller: "results_controller"
            })
            .otherwise({
                redirectTo: '/home'
            })
    }]);