'use strict';

angular.module('evo_tracker').factory('storage', [
    '$localStorage',
    function($localStorage){

        this.name = "NOMBRE";
        //var storage_service = {};

        this.hello = function(){console.log(this.name)};

        return this;
    }
]);