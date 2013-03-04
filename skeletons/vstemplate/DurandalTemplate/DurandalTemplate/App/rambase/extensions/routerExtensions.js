define(function (require) {

    var autoConvertRouteToModuleId = function (url, params) {
        var route = this.stripParameter(url);
        return "rambase/plugins/" + route + "/viewmodels/" + route;
    };


    return {
        extend: function () {
            var router = require('durandal/plugins/router');
            router.autoConvertRouteToModuleId = autoConvertRouteToModuleId;
        }
    }
});