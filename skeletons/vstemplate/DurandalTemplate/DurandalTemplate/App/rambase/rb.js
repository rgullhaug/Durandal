define(function (require) {

    return {

        applyExtensions: function () {
            require('rambase/extensions/routerExtensions').extend();
            //require('rambase/extensions/viewModelBinderExtensions').extend();
            require('rambase/extensions/applyBindingsExtensions').extend();
            require('rambase/extensions/knockout-extensions').extend();
        }

    }

});