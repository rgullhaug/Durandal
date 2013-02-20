requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(function(require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        system = require('durandal/system'),
        router = require('durandal/plugins/router'),
        vmb = require('durandal/viewModelBinder'),
        vmbExtensions = require('../App/Framework_extensions/viewModelBinderExtensions');
    
    require('../App/Framework_extensions/knockout-extensions');
        
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';
    app.start().then(function () {
        //vmb.bind = vmbExtensions.bind;
        
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        
        //configure routing
        router.useConvention();
        router.mapNav('rb-plugins/welcome/viewmodels/welcome');

        //router.mapNav('flickr');
        
        app.adaptToDevice();
        
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('shell', 'entrance');
    });
});