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