'use strict';

angular.module('evo_tracker').factory('storage', [
    '$localStorage',
    function($localStorage){

        var storage = {
            user: {
                activities: []
            }
        };

        var storage_service = {};

        storage_service.storeUserActivity = function(activity, callback){
            if(!activity.name || !activity.type) return callback("Name and type are needed.");
            if(storage.user.activities.indexOf(activity.name) >= 0) return callback("An activity with that name already exists");

            $localStorage.data = storage;
            $localStorage.$save();
            callback();
        };

        return storage_service;
    }
]);