define(function (require) {
    var http = require('durandal/http'),
        app = require('durandal/app');

    return {
        displayName: 'Component B',
        items: ko.observableArray([
            { id: "1", name: "apple" },
            { id: "2", name: "orange" },
            { id: "3", name: "banana" }
        ]),
        addItem: function() {
            var num = this.items().length + 1;
            this.items.push({ id: num, name: "new" + num});
        },
        clearItems: function () {
            this.items.removeAll();
        },
        activate: function () {

        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});