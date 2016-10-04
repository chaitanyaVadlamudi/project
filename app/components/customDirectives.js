//Directives are of three types 1.ui rendering directives.
//2. functional directives
//3. validation directives.

/*on html, directive will be used as
Element: <custom-brand></custom-brand>
Attribute: <div custom-brand></div>
Class:     <div class="custom-brand"></div>
*/
(function(){
    'use strict'
    angular.module("components")
    .directive("customBrand",[function(){
        return{
            template:'<a class="navbar-brand" href="#"> Vehicle Deals</a>',
            restrict:"A,E,C,M"
            
        }; 
    }]);
})();
(function(){
    angular.module("components")
    .directive("customHeader",[function(){
        return{
            templateUrl:"app/templates/header.html",
            restrict:"A",
            controller:'headerCtrl',
            link:function(scope,element,attrs){
                console.log(scope);
                console.log(element);
                console.log(attrs);
            }
        };
    }]);
})();
(function(){
    
    angular.module("components")
    .directive("numbersOnly",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                element.bind("keypress",function(evt){
                    console.log(this.value);
                    var exp = RegExp(/^\d+$/)
                    if((!exp.test(evt.key)) || this.value.length> attrs["length"]){
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
})();