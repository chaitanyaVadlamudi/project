(function(){
    'use strict'
    angular.module("components",[]);
})();
//Directives are of three types 1.ui rendering directives.
//2. functional directives
//3. validation directives.

/*on html, directive will be used as
Element: <custom-brand></custom-brand>
Attribute: <div custom-brand></div>
Class:     <div class="custom-brand"></div>
*/
(function () {
    angular.module("components")
        .directive("customBrand", [function () {
            return {
                template: '<a class="navbar-brand" href="#">Vehicle Deals</a>',
                restrict: "E,A,C,M"
            };
    }]);
})();

(function () {
    angular.module("components")
        .directive("customHeader", [function () {
            return {
                templateUrl: "app/templates/header.html",
                restrict: "A",
                controller: 'headerCtrl',
                link: function (scope, element, attrs) {
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                }
            };
    }]);
})();

(function () {

    angular.module("components")
        .directive("numbersOnly", [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    element.bind("keypress", function (evt) {
                        console.log(this.value);
                        var exp = RegExp(/^\d+$/)
                        if ((!exp.test(evt.key)) || this.value.length > attrs["length"]) {
                            evt.preventDefault();
                        }
                    });
                }
            }

    }]);


    angular.module("components")
    .directive("alphabetsOnly",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                element.bind("keypress",function(evt){
                    var exp = RegExp(/^[a-zA-z. ]+$/)
                    if(!exp.test(evt.key)){
                        evt.preventDefault();
                    }
                });
            }
        }
        
    }]);
    
     angular.module("components")
    .directive("customDatepicker",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                
                var config ={};
                if(attrs['mindate']){
                    config.minDate=attrs["mindate"]
                }
                 if(attrs['maxdate']){
                    config.maxDate=attrs["maxdate"]
                }
                element.datepicker(config);
            }
        }
        
    }]);


   
    angular.module("components")
        .directive("parent", [function () {
            return {
                restrict: "A",
                template: "<h1>I am the parent. <div child-dir></div></h1>",
                controller: function ($scope) {
                    console.log("I am the controller");
                },
                compile: function (element, attrs) {
                        console.log(element);
                        return {
                            pre: function (scope, element, attrs) {
                                scope.parentName = "John";
                                console.log("i am the parent");
                                console.log("pre Link");
                            },
                            post: function (scope, element, atts) {
                                console.log("Post Link");
                            }
                        }
                    }
                    /*link:function(scope,element,attrs){
                        scope.parentName="John";
                        console.log("i am the parent");
                    }*/
            }

    }]);

    angular.module("components")
        .directive("childDir", [function () {
            return {
                restrict: "A",
                template: "<h1>Hey i am the child:{{parentName}}</h1>",
                /* controller:function($scope){
                     console.log("I am the controller");
                 },*/
                /* link: function (scope, element, attrs) {
                         console.log(scope.parentName);
                         console.log("i am the child");
                     }*/
                compile: function (element, attrs) {
                    console.log(element);
                    return {
                        pre: function (scope, element, attrs) {
                            console.log("pre Link");
                        },
                        post: function (scope, element, atts) {
                            console.log(scope.parentName);
                            console.log("i am the child");
                            console.log("Post Link");
                        }
                    }
                }
            }

    }]);
})();
(function(){
    angular.module("components")
    .filter("rangeFilter",[function(){
        return function(data,filteringCriteria){
            var newArray=[];
            if(filteringCriteria && filteringCriteria.min && filteringCriteria.max){
                _.each(data,function(item){
                    if(item.price >= filteringCriteria.min && item.price < filteringCriteria.max){
                        newArray.push(item);
                    }
                });
                return newArray;
            }
            else{
                return data;
            }
        };
        
    }])
})();
(function(){
    'use strict'
    angular.module("header",[]);
})();
(function () {
    angular.module("header")
        .controller("headerCtrl", ["$scope","build","$translate",function ($scope,build,$translate) {
                        console.log(build);
                        $scope.vehicleCount = 0;
                        $scope.total = 0;
            $scope.$on("VEHICLE-ADDED", function (event, args) {
                $scope.total+=args.vehic.price;
                $scope.vehicleCount++;
            });
             $scope.$on("VEHICLE-REMOVED", function (event, args) {
                $scope.total-=args.vehic.price;
                $scope.vehicleCount--;
            });
            $scope.changeLanguage=function(language){
            $translate.use(language)
            };
}]);


})();
(function(){
    angular.module("homeCtrl",function($scope,$state){
        console.log($state.params);
    });
})();
(function(){
    'use strict'
    angular.module("home",[]);
})();
(function(){
    'use strict'
    angular.module("login",[]);
    angular.module("login")
    .config([function(){
        console.log("i am the login module");
    }])
})();
angular.module("vehicleDealsApp",[])
.provider("build",[function(){
    this.version="1.0.0";
    this.$get=function(){
        return this.version;
        };
}]);
(function(){
    angular.module("lookup")
    .service("lookupSvc",function(){
    this.getCountrylist =function(){
    return [{
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    }];
    };
        this.getStatelist =function(){
    return [{
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
};
});
})();
(function(){
    angular.module("lookup",[]);
})();
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
(function(){
    'use strict'
    angular.module("register",[]);
     })();
(function(){
     'use strict'
    angular.module("vehicles",[]);
})();
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
(function(){
    angular.module("vehicles")
    .service("vehicleSvc",["$http","$q",
                           function($http,$q){
                               var vehicleResponse;
        function addDiscount(data){
             _.each(data.data.vehicles,function(item){
                item.discount=.1;
            });
            return data;
        }
                               
        this.getVehicles=function(){
       var dfd= $q.defer();
       if (vehicleResponse) {
           dfd.resolve(vehicleResponse);
       }
            else {
                  $http.get("app/api/vehicles.json")
        .then(function(response){
       var data = addDiscount(response);
          dfd.resolve(data);                 
        })
        .catch(function(response){
           dfd.reject(response)                  
        });
            }
                           
        return dfd.promise;
         // return  $http.get("app/api/vehicles.json");
          
        };
    }]);
})();
(function(){
    'use strict'
    //module initilization
    angular.module("vehicleDeals",["login","register","ui.router","home","lookup","vehicles","components","header","vehicleDealsApp",'pascalprecht.translate']);
    //code goes here.
    //consuming the modeule
     angular.module("vehicleDeals")
     .config([ "$stateProvider","buildProvider","$translateProvider",function($stateProvider,buildProvider,$translateProvider){
         console.log(buildProvider.version);
         $translateProvider.translations('en',{
             LOGIN:'Login',
             TOTAL:'Total',
             REGISTER:'Register',
             VEHICLES:'Vehicles',
             CART:'Cart',
             HOME:'Home'
         });
         $translateProvider.translations('de',{
              LOGIN:'Anmeldung',
              TOTAL:'Gesamt',
              REGISTER:'Neu registrieren',
              VEHICLES:'Fahrzeuge',
              CART:'Karte',
              HOME:'Zuhause'
         });
         $translateProvider.preferredLanguage('en');
         var basePath ="app/templates/";
         var homeObj={
             templateUrl:basePath+"home.html",
             params: {
                 userName: ""
             },
             controller:"registerCtrl"
         };
         var registerObj={
             templateUrl:basePath+"register.html",
             controller:"registerCtrl"
         };
          var loginObj={
             templateUrl:basePath+"login.html"
         };
          var vehiclesObj={
             templateUrl:basePath+"vehicles.html",
              controller:"vehicleCtrl"
         };
         
         $stateProvider.state("home",homeObj);
         $stateProvider.state("vehicles",vehiclesObj);
         $stateProvider.state("login",loginObj);
         $stateProvider.state("register",registerObj);
         
     }])
     .run(function () {
            console.log("finally");
        });
})();