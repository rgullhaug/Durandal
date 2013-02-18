define(function (require) {
    var http = require('durandal/http'),
        app = require('durandal/app');
    
    return {
        displayName: 'Demo app',
        activate: function () {
            
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});