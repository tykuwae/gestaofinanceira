function dashboardRouteConfig (app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

dashboardRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();
}

dashboardRouteConfig.prototype.processRoutes = function () {

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

dashboardRouteConfig.prototype.addRoutes = function () {

    var self = this;

/* PAGES ------------------------------------------------------------------------------------------------------------------------------------------------- */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/dashFatura',
        callbackFunction : function (request, response) {

            response.render('dashFatura',  { title : "Gestão de Faturas"});
        }

    })
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/viewImposto',
        callbackFunction : function (request, response) {

            response.render('viewImposto',  { title : "Consulta de impostos cadastrados"});
        }

    })

}

module.exports = dashboardRouteConfig;