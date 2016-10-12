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
         $translateProvider.preferredLanguage('de');
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