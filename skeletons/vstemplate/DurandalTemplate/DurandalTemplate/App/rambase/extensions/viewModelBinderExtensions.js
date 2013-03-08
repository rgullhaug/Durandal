define(function (require) {
    var viewModelBinder = require('durandal/viewModelBinder');

    return {
        extend: function () {
            //this will make us to use 'data-kendo-bind' atribute instead of 'data-bind' attribute to avoid collision with knockout
            kendo.ns = "kendo-";

            //now before Durandal do knockout data bind, we call kendo bindings to get the kendo MVVM working
            viewModelBinder.beforeBind = function (obj, view) {
                kendo.bind(view, obj.viewModel);
            };
        }

    }
        
});