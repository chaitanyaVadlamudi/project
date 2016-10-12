angular.module("vehicleDealsApp",[])
.provider("build",[function(){
    this.version="1.0.0";
    this.$get=function(){
        return this.version;
        };
}]);