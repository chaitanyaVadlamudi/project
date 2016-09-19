(function(){
    'use strict'
    //module initilization
    angular.module("vehicleDeals",["login","register","ui.router"]);
    //code goes here.
    //consuming the modeule
     angular.module("vehicleDeals")
     .config([ "$stateProvider",function($stateProvider){
         var basePath ="app/templates/"
         var homeObj={
             templateUrl:basePath+"home.html"
         };
         var registerObj={
             templateUrl:basePath+"register.html",
             controller:"registerCtrl"
         };
          var loginObj={
             templateUrl:basePath+"login.html"
         };
          var vehiclesObj={
             templateUrl:basePath+"vehicles.html"
         };
         
         $stateProvider.state("home",homeObj);
         $stateProvider.state("vehicles",vehiclesObj);
         $stateProvider.state("login",loginObj);
         $stateProvider.state("register",registerObj);
         
     }]);
})();