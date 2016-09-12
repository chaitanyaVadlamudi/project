(function(){
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
                    function($scope){
          console.log("welcome to the controller");
        $scope.heading ="Register";
        
        $scope.user="sj";
        
       
    });
})();