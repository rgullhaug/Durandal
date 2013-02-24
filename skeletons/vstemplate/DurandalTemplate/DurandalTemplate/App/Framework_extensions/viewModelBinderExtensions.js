define(function (require) {
    return {
        bind: function (obj, view) {
            this.doBind(obj, view, function () {
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
    }
});