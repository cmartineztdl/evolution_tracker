'use strict';

angular.module('evo_tracker').controller('activities_controller', [
    "$scope",
    "storage",
    function($scope, storage){
        $scope.models = {
            activity: {
                types: ["Number", "Time"],
                form_create: {
                    name: "",
                    p_name: "",
                    p_type: "Number"
                },
                properties: []
            },

        };

        $scope.addProperty = function(){
            //Check args
            var args = $scope.models.activity.form_create;
            if(!args.p_name || !args.p_type){
                return alert("Invalid args");
            }

            //Get property data
            var p_data = {
                name: args.p_name,
                type: args.p_type
            };

            if($scope.models.activity.properties.some(function(elem){return elem.name == p_data.name})){
                return alert("A property with that name already exists");
            }

            $scope.models.activity.properties.push(p_data);
            args.p_name = "";
        };

        $scope.removeProperty = function(p_name){
            if(!p_name){
                return alert("Name nedeed");
            }

            var p_list = $scope.models.activity.properties;
            var index = p_list.map(function(e){return e.name}).indexOf(p_name);
            if(index > -1)
                p_list.splice(index, 1);
        };
    }
]);