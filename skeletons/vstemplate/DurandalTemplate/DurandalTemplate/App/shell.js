define(function(require) {
    var router = require('durandal/plugins/router'),
        app = require('durandal/app');

    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            //router.mapAuto('viewmodels');
            router.autoConvertRouteToModuleId = function (url, params) {
                var route = router.stripParameter(url);
                return "rb-plugins/"+ route + "/viewmodels/" + route;
            };
            return router.activate('welcome');
        }
    };
});