(function(){
    angular.module("vehicles")
    .controller("vehicleCtrl",["$scope","vehicleSvc",
                           function($scope,vehicleSvc){
    vehicleSvc.getVehicles()
    .then(function(response){
        $scope.vehicles = response.data.vehicles;
    })
    .catch(function(response){
        $scope.showError=response;
    });
        
    }]);
})();