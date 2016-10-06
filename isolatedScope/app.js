angular.module("demoApp", []);

angular.module("demoApp")
    .directive("customBrand", [function () {
        return {
            restrict: "A",
            template: "<a>{{brand}}</a>",
            scope:{
              brand:"@" //readOnly or oneway binding
            }
           
        }

}]);

angular.module("demoApp")
    .controller("clientA", ["$scope", function ($scope) {
        $scope.shoes ="puma";
}]);
angular.module("demoApp")
    .controller("clientB", ["$scope", function ($scope) {
        $scope.tees ="nike";
}]);
angular.module("demoApp")
    .controller("clientC", ["$scope", function ($scope) {
        $scope.sneakers ="adidas";
}]);

