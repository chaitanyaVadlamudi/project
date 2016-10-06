angular.module("demoApp", []);

angular.module("demoApp")
    .directive("customUser", [function () {
        return {
            restrict: "A",
            template: '<input type="text" ng-model="username"><div>Directive Property:{{username}}</div>',
            scope: {
                //username: "@" //readonly or one way binding.
                username:"="//two way communication.
            }
        }

}]);

angular.module("demoApp")
    .controller("clientA", ["$scope", function ($scope) {
        $scope.user = "NBITS";
}]);