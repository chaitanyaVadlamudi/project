(function () {
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
            function ($scope) {
                $scope.userDetails = {
                    terms: false
                };
                $scope.countries = [{
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    }];
        
                var states = [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    }, {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
        
          $scope.states = [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    }, {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
            
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
                };
            });
})();