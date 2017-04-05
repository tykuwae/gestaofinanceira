function relatoriosRouteConfig (app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

relatoriosRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();
}

relatoriosRouteConfig.prototype.processRoutes = function () {

    var self = this;

    self.routeTable.forEach(function(route) {

        if (route.requestType == 'get') {
            console.log(route);
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {
            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {}

    });
}

relatoriosRouteConfig.prototype.addRoutes = function () {

    var self = this;

/* PAGES ------------------------------------------------------------------------------------------------------------------------------------------------- */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/relatorioFaturas',
        callbackFunction : function (request, response) {

            response.render('relatorioFaturas',  { title : "Relatorio de Faturas"});
        }

    })
/* GET METHODS ------------------------------------------------------------------------------------------------------------------------------------------- */
    /* PROCURA TODOS AS FATURAS */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/getAllFaturas',
        callbackFunction : function (request, response) {
            
            response.json({faturas : [
                {
                    "codigo_fatura": 4,
                    "codigo_lote": 1,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 795,
                    "status": true,
                    "valor_bruto": 726343.02,
                    "valor_liquido": 640779.81,
                    "data_emissao": "2017-01-12T10:26:37 +02:00",
                    "data_vencimento": "2017-01-20T11:24:24 +02:00"
                },
                {
                    "codigo_fatura": 5,
                    "codigo_lote": 1,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2970,
                    "status": true,
                    "valor_bruto": 269946.55,
                    "valor_liquido": 238146.85,
                    "data_emissao": "2017-01-04T03:53:50 +02:00",
                    "data_vencimento": "2017-01-25T11:55:31 +02:00"
                },
                {
                    "codigo_fatura": 6,
                    "codigo_lote": 1,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2362,
                    "status": true,
                    "valor_bruto": 343662.29,
                    "valor_liquido": 303178.87,
                    "data_emissao": "2017-01-10T01:08:38 +02:00",
                    "data_vencimento": "2017-01-28T12:08:35 +02:00"
                },
                {
                    "codigo_fatura": 7,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 4465,
                    "status": true,
                    "valor_bruto": 102250.76,
                    "valor_liquido": 84684.08,
                    "data_emissao": "2017-01-10T07:59:15 +02:00",
                    "data_vencimento": "2017-01-26T01:12:34 +02:00"
                },
                {
                    "codigo_fatura": 8,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 1023,
                    "status": true,
                    "valor_bruto": 31694.95,
                    "valor_liquido": 26249.76,
                    "data_emissao": "2017-01-07T11:32:43 +02:00",
                    "data_vencimento": "2017-01-19T04:36:27 +02:00"
                },
                {
                    "codigo_fatura": 9,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 4298,
                    "status": true,
                    "valor_bruto": 82193.74,
                    "valor_liquido": 68072.86,
                    "data_emissao": "2017-01-10T10:15:31 +02:00",
                    "data_vencimento": "2017-01-18T09:34:29 +02:00"
                },
                {
                    "codigo_fatura": 10,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 1631,
                    "status": true,
                    "valor_bruto": 77816.18,
                    "valor_liquido": 64447.36,
                    "data_emissao": "2017-01-08T08:41:14 +02:00",
                    "data_vencimento": "2017-01-17T02:52:53 +02:00"
                },
                {
                    "codigo_fatura": 11,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2479,
                    "status": true,
                    "valor_bruto": 60700.96,
                    "valor_liquido": 50272.54,
                    "data_emissao": "2017-01-14T04:32:49 +02:00",
                    "data_vencimento": "2017-01-28T06:47:50 +02:00"
                },
                {
                    "codigo_fatura": 12,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 4485,
                    "status": true,
                    "valor_bruto": 59709.91,
                    "valor_liquido": 49451.75,
                    "data_emissao": "2017-01-01T02:46:03 +02:00",
                    "data_vencimento": "2017-01-20T09:06:00 +02:00"
                },
                {
                    "codigo_fatura": 13,
                    "codigo_lote": 1,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 1602,
                    "status": true,
                    "valor_bruto": 66822.15,
                    "valor_liquido": 55342.1,
                    "data_emissao": "2017-01-02T09:56:21 +02:00",
                    "data_vencimento": "2017-01-22T02:18:06 +02:00"
                },
                {
                    "codigo_fatura": 14,
                    "codigo_lote": 2,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 1883,
                    "status": true,
                    "valor_bruto": 593705.63,
                    "valor_liquido": 523767.11,
                    "data_emissao": "2017-02-11T01:41:42 +02:00",
                    "data_vencimento": "2017-02-24T04:21:38 +03:00"
                },
                {
                    "codigo_fatura": 15,
                    "codigo_lote": 2,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 857,
                    "status": true,
                    "valor_bruto": 407281.94,
                    "valor_liquido": 359304.13,
                    "data_emissao": "2017-02-09T05:13:07 +02:00",
                    "data_vencimento": "2017-02-21T01:46:26 +03:00"
                },
                {
                    "codigo_fatura": 16,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2298,
                    "status": true,
                    "valor_bruto": 150643.77,
                    "valor_liquido": 124763.17,
                    "data_emissao": "2017-02-12T05:09:40 +02:00",
                    "data_vencimento": "2017-02-26T02:00:44 +03:00"
                },
                {
                    "codigo_fatura": 17,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2895,
                    "status": true,
                    "valor_bruto": 156234.09,
                    "valor_liquido": 129393.07,
                    "data_emissao": "2017-02-10T12:52:00 +02:00",
                    "data_vencimento": "2017-02-23T08:54:35 +03:00"
                },
                {
                    "codigo_fatura": 18,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 786,
                    "status": true,
                    "valor_bruto": 184301.9,
                    "valor_liquido": 152638.83,
                    "data_emissao": "2017-02-06T06:27:05 +02:00",
                    "data_vencimento": "2017-02-27T05:20:28 +03:00"
                },
                {
                    "codigo_fatura": 19,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 3104,
                    "status": true,
                    "valor_bruto": 195500.82,
                    "valor_liquido": 161913.78,
                    "data_emissao": "2017-02-13T11:15:16 +02:00",
                    "data_vencimento": "2017-02-25T08:11:40 +03:00"
                },
                {
                    "codigo_fatura": 20,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 4872,
                    "status": true,
                    "valor_bruto": 219711.92,
                    "valor_liquido": 181965.41,
                    "data_emissao": "2017-02-06T05:01:28 +02:00",
                    "data_vencimento": "2017-02-21T06:07:33 +03:00"
                },
                {
                    "codigo_fatura": 21,
                    "codigo_lote": 2,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 1789,
                    "status": true,
                    "valor_bruto": 269163.91,
                    "valor_liquido": 222921.55,
                    "data_emissao": "2017-02-11T02:01:52 +02:00",
                    "data_vencimento": "2017-02-24T10:06:12 +03:00"
                },
                {
                    "codigo_fatura": 22,
                    "codigo_lote": 3,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 3951,
                    "status": true,
                    "valor_bruto": 934763.49,
                    "valor_liquido": 824648.35,
                    "data_emissao": "2017-03-01T02:12:15 +03:00",
                    "data_vencimento": "2017-03-17T05:33:53 +03:00"
                },
                {
                    "codigo_fatura": 23,
                    "codigo_lote": 3,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 523,
                    "status": true,
                    "valor_bruto": 281112.75,
                    "valor_liquido": 232817.58,
                    "data_emissao": "2017-03-07T12:44:14 +03:00",
                    "data_vencimento": "2017-03-30T04:21:36 +03:00"
                },
                {
                    "codigo_fatura": 24,
                    "codigo_lote": 3,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2284,
                    "status": true,
                    "valor_bruto": 282198.49,
                    "valor_liquido": 233716.79,
                    "data_emissao": "2017-03-12T04:55:41 +03:00",
                    "data_vencimento": "2017-03-19T08:07:57 +03:00"
                },
                {
                    "codigo_fatura": 25,
                    "codigo_lote": 3,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 722,
                    "status": true,
                    "valor_bruto": 219564.16,
                    "valor_liquido": 181843.04,
                    "data_emissao": "2017-03-01T06:45:44 +03:00",
                    "data_vencimento": "2017-03-16T11:39:33 +03:00"
                },
                {
                    "codigo_fatura": 26,
                    "codigo_lote": 3,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2149,
                    "status": true,
                    "valor_bruto": 227006.17,
                    "valor_liquido": 188006.51,
                    "data_emissao": "2017-03-09T08:20:35 +03:00",
                    "data_vencimento": "2017-03-21T07:13:45 +03:00"
                },
                {
                    "codigo_fatura": 27,
                    "codigo_lote": 3,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 148,
                    "status": true,
                    "valor_bruto": 249019.29,
                    "valor_liquido": 206237.78,
                    "data_emissao": "2017-03-01T11:48:18 +03:00",
                    "data_vencimento": "2017-03-23T09:16:01 +03:00"
                },
                {
                    "codigo_fatura": 30,
                    "codigo_lote": 4,
                    "codigo_regra": 1,
                    "codigo_emissor": 77,
                    "codigo_cliente": 3951,
                    "status": false,
                    "valor_bruto": 456700,
                    "valor_liquido": 402900.64,
                    "data_emissao": "2017-04-04T02:12:15 +03:00",
                    "data_vencimento": "2017-04-17T05:33:53 +03:00"
                },
                {
                    "codigo_fatura": 28,
                    "codigo_lote": 4,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 2791,
                    "status": false,
                    "valor_bruto": 239335.52,
                    "valor_liquido": 198217.68,
                    "data_emissao": "2017-04-03T10:46:04 +03:00",
                    "data_vencimento": "2017-04-29T04:20:44 +03:00"
                },
                {
                    "codigo_fatura": 29,
                    "codigo_lote": 4,
                    "codigo_regra": 2,
                    "codigo_emissor": 77,
                    "codigo_cliente": 274,
                    "status": false,
                    "valor_bruto": 227235.91,
                    "valor_liquido": 188196.78,
                    "data_emissao": "2017-04-03T12:28:50 +03:00",
                    "data_vencimento": "2017-04-16T09:26:02 +03:00"
                }
            ]});
        }

    })

}


module.exports = relatoriosRouteConfig;