'use strict';

angular.module('evo_tracker').controller('home_controller', [
    "$scope",
    "storage",
    function($scope, storage){
        $scope.title = "HOME!!";
        storage.hello();
    }
]);