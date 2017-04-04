angular.module("regraModule")
.factory("regraService", regraService);


regraService.$inject = ['$http'];


function regraService($http) {

    var codigo_regra = "";

    return {

        createRegra : function (regra) {
            return $http.post('/createRegra', regra);
        },
        editRegra : function (regra) {
            return $http.post('/editRegra/' + regra.codigo_regra_fat, 
                {
                nome_regra : regra.nome_regra,
                codigo_servico : regra.codigo_servico
                }
            );
        },
        deleteRegra : function (codigo_regra_fat) {
            return $http.post('/deleteRegra/' + codigo_regra_fat, {});
        },
        getAllRegras : function () {
            return $http.get('/getAllRegras');
        },
        getAllServicos : function () {
            return $http.get('/getAllServicos');
        },
        getAllRegras : function () {
            return $http.get('/getAllRegras');
        },
        getRegra : function (codigo_regra_fat) {
            return $http.get('/getRegra/' + codigo_regra_fat);
        }

    }
}