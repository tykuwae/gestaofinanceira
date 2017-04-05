angular.module("relatorioModule")
.factory("relatorioService", relatorioService);


relatorioService.$inject = ['$http'];


function relatorioService($http) {

    return {
        getAllFaturas : function () {
            return $http.get('/getAllFaturas');
        }

    }
}