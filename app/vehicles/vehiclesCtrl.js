(function () {
    angular.module("vehicles")
        .controller("vehicleCtrl", ["$scope", "vehicleSvc", "$rootScope",
                           function ($scope, vehicleSvc, $rootScope) {



                $scope.filterRange = [{
                        range:"between 1000000 to 3000000",
                                   min:1000000,
                                   max:3000000
                               },
                                 {
                                   range:"between 3000000 to 7000000",
                                   min: 3000000,
                                   max:7000000
                               },
                                 {
                                   range:"between 7000000 to 12000000",
                                   min:7000000,
                                   max:12000000
                               },
                                 {
                                   range:"between 12000000 to 50000000",
                                   min:12000000,
                                   max:50000000
                               }];

                vehicleSvc.getVehicles()
                    .then(function (response) {
                        $scope.vehicles = response.data.vehicles;
                    })
                    .catch(function (response) {
                        $scope.showError = response;
                    });


                $scope.changeSort = function () {
                    if ($scope.sortBy == "price") {
                        $scope.sortBy = "=price"
                    } else {
                        $scope.sortBy = "-price"
                    }
                    /*$scope.sortBy = $scope.sortBy == "Price" ? "-Price" : "Price";*/
                };
                $scope.selectVehicle = function (vehicle) {
                    vehicle.isSelected = true;
                    $rootScope.$broadcast("VEHICLE-ADDED", {
                        vehic: vehicle
                    });
                };
                $scope.removeVehicle = function (vehicle) {
                    vehicle.isSelected = false;
                    $rootScope.$broadcast("VEHICLE-REMOVED", {
                        vehic: vehicle
                    });
                };
                               $scope.$watch("searchBymodel",function(newVal,oldVal){
                                   console.log("old value is:" +oldVal);
                                   console.log("New Value is:" +newVal)
                               });
                               setTimeout(function(){
                                     $scope.searchByModel="Huracan";
                                   $scope.$apply();
                                    },3000);

    }]);


})();