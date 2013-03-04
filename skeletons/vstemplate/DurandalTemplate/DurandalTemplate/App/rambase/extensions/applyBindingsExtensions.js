define(function (require) {


    return {
        extend: function () {
            var original = ko.applyBindings;

            ko.applyBindings = function (obj, view) {

                var bindableElements = $(view).find('[data-bind]');

                var kendoElements = $(view).find('[data-mvvm-framework=kendo]');
                $(kendoElements).wrapAll('<div data-bind="stopBinding: true"></div>');
                for (var i = 0; i < kendoElements.length; i++) {
                    kendo.bind(kendoElements[i], obj.viewModel);
                }

                original(obj, view);

            }
        }
    }
});