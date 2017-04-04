angular.module("regraModule")
.controller("editRegraController", editRegraController);


editRegraController.$inject = ['$scope', '$timeout', '$window', 'regraService'];


function editRegraController($scope, $timeout, $window, regraService) {

    $scope.regra = { };
    $scope.servicos = { };

    getAllServicos();
    getRegra(sessionStorage.codigo_regra_fat);

    function getRegra(codigo_regra_fat) {
        regraService.getRegra(codigo_regra_fat).then(function(data){
            $scope.regra = data.data.regra[0];
            for (i=0; i<$scope.servicos.length; i++){
                if ($scope.regra.codigo_servico == $scope.servicos[i].codigo_servico ){
                    $scope.regra.nome_servico = $scope.servicos[i].nome_servico
                    $scope.servicos.splice(i,0);
                }
            }
            console.log(data.data.regra[0]);
        });
    }

    function getAllServicos() {
        regraService.getAllServicos().then(function (data){
            $scope.servicos = data.data.servicos;
        });
    }

    $scope.createRegra = function(regra) {
        if (regra.nome_regra == null || regra.codigo_servico == null){
            $window.alert('Todos os campos devem ser preenchidos!')
        } 
        else
            regraService.createRegra(regra)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.redirectCreateRegra = function() {
        
        $window.location.href = '/createRegra';
        
        }
    
    $scope.redirectHome = function() {

        $window.location.href = '/';
        
        }

    }
