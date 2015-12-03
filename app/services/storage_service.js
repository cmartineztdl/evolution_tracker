'use strict';

angular.module('evo_tracker').factory('storage', [
    '$localStorage',
    '$rootScope',
    function($localStorage, $rootScope){

        var activities = $localStorage.activities || [];

        var storage_service = {};

        storage_service.storeActivity = function(activity, callback){
            if(activities.indexOf(activity.name) >= 0) return callback("An activity with that name already exists");

            activities.push(activity);
            $localStorage.activities = activities;
            $localStorage.$save();

            $rootScope.$broadcast("activities_changed");

            callback();
        };

        storage_service.deleteActivity = function(activityName, callback){
            var index = activities.map(function(e){return e.name}).indexOf(activityName);
            if(index < 0)
                return callback("Activity not found");

            activities.splice(index, 1);

            $localStorage.activities = activities;
            $localStorage.$save();

            $rootScope.$broadcast("activities_changed");

            callback();
        };

        storage_service.getActivities = function(){
            return activities;
        };

        return storage_service;
    }
]);