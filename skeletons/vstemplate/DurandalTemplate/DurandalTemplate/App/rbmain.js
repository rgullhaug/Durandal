requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['rambase/rb', 'durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
    function (rb, app, viewLocator, system, router) {

        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = 'Durandal Starter Kit';
        app.start().then(function () {
            rb.applyExtensions();
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //configure routing
            router.useConvention();
            router.mapNav('rambase/plugins/welcome/viewmodels/welcome');
            //router.mapNav('welcome');
            //router.mapNav('flickr');

            app.adaptToDevice();

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('rambase/shell/viewmodels/shell', 'entrance');
        });
    });