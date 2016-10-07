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