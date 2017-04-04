angular.module("dashFaturaModule")
.factory("dashFaturaService", dashFaturaService);


dashFaturaService.$inject = ['$http'];


function dashFaturaService($http) {
    return {

        getAllFaturas : function () {
            return $http.get('/getAllFaturas');
        }

    }
}