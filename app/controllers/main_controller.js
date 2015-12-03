'use strict';

angular.module('evo_tracker').controller('main_controller', [
    "$scope",
    "$location",
    "storage",
    function($scope, $location, storage){
        $scope.models = {};

        $scope.$on("$locationChangeSuccess", function(){
            $scope.models.activeView = $location.path();
        });

        $scope.goTo = function(path){
            if(["/home", "/activities", "/results"].indexOf(path) >= 0)
                $location.path(path);
        };
    }
]);