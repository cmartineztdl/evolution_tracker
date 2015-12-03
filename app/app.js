'use strict';

angular.module('evo_tracker',['ngRoute', 'ngStorage'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: "app/templates/home.html",
                controller: "home_controller"
            })
            .when('/tmp2', {
                templateUrl: "app/templates/tmp2.html",
                controller: "home_controller"
            })
            .otherwise({
                redirectTo: '/home'
            })
    }]);