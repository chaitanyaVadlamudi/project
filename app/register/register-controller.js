(function () {
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
            function ($scope,$state,lookupSvc) {
                $scope.userDetails = {
                    terms: false
                };
                $scope.countries = lookupSvc.getCountrylist();
                var states = lookupSvc.getStatelist();
        
          $scope.states = 
            
        $scope.loadStates=function(){
            console.log($scope.selectedCountry);
            
            $scope.stateList=[]; angular.forEach(states,function(item){
                if(item.countryCode===$scope.selectedCountry.key){
                   $scope.stateList.push(item); 
                }
            });
            console.log($scope.stateList);
        };

                $scope.registerUser = function () {
                    console.log($scope.userDetails)
                    $state.go("home",{
                        userDetails:$scope.userDetails
                    });
                };
            });
})();