angular.module("relatorioModule")
.controller("relatorioFaturaController", relatorioFaturaController);


relatorioFaturaController.$inject = ['$scope', '$timeout', '$window','relatorioService'];


function relatorioFaturaController($scope, $timeout, $window, relatorioService) {

    $scope.faturas = [];


    getAllFaturas();

    function getAllFaturas() {
        relatorioService.getAllFaturas().then(function (data){
            
            $scope.faturas = data.data.faturas;

            for (i=0; i < $scope.faturas.length; i++){
                //Trata datas
                $scope.faturas[i].data_emissao = $scope.faturas[i].data_emissao.slice(8, 10) + "/" 
                + $scope.faturas[i].data_emissao.slice(6, 7) + "/" 
                + $scope.faturas[i].data_emissao.slice(0, 4)
                $scope.faturas[i].data_vencimento = $scope.faturas[i].data_vencimento.slice(8, 10) + "/" 
                + $scope.faturas[i].data_vencimento.slice(6, 7) + "/" 
                + $scope.faturas[i].data_vencimento.slice(0, 4)

                //Trata tipo de serviço
                if ($scope.faturas[i].codigo_regra == 1) 
                    $scope.faturas[i].tipo = "Venda Imobiliária"
                else
                    $scope.faturas[i].tipo = "Prestação de Serviço"
            }

            console.log($scope.faturas);
        });
    }

    $scope.exportData = function() {
    var blob = new Blob([document.getElementById('exportable').innerHTML], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    saveAs(blob, "Relatorio_Faturas.xls");
    };

}