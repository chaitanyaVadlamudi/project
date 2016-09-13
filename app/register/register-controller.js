(function(){
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
                    function($scope){
         $scope.userDetails={};
        $scope.registerUser=function(){
            console.log($scope.userDetails)
        };
       
    });
})();