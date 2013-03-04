define(function (require) {
    var system = require('durandal/system');
    var viewModelBinder = require('durandal/viewModelBinder');

    var insufficientInfoMessage = 'Insufficient Information to Bind';
    var unexpectedViewMessage = 'Unexpected View Type';

    function doBind(obj, view, action) {
        if (!view || !obj) {
            if (viewModelBinder.throwOnErrors) {
                throw new Error(insufficientInfoMessage);
            } else {
                system.log(insufficientInfoMessage, view, obj);
            }
            return;
        }

        if (!view.getAttribute) {
            if (viewModelBinder.throwOnErrors) {
                throw new Error(unexpectedViewMessage);
            } else {
                system.log(unexpectedViewMessage, view, obj);
            }
            return;
        }

        var viewName = view.getAttribute('data-view');

        try {
            system.log('Binding', viewName, obj);

            viewModelBinder.beforeBind(obj, view);
            action();
            viewModelBinder.afterBind(obj, view);
        } catch (e) {
            if (viewModelBinder.throwOnErrors) {
                throw new Error(e.message + ';\nView: ' + viewName + ";\nModuleId: " + system.getModuleId(obj));
            } else {
                system.log(e.message, viewName, obj);
            }
        }
    }

    var bind = function (obj, view) {
        doBind(obj, view, function () {
            var bindableElements = $(view).find('[data-bind]');

            var kendoElements = $(view).find('[data-mvvm-framework=kendo]');
            $(kendoElements).wrapAll('<div data-bind="stopBinding: true"></div>');
            for (var i = 0; i < kendoElements.length; i++) {
                kendo.bind(kendoElements[i], obj.viewModel);
            }

            ko.applyBindings(obj, view);
            if (obj.setView) {
                obj.setView(view);
            }
        });
    }


    return {
        extend: function () {
            viewModelBinder.bind = bind;
        }

    }
        
});