define(function (require) {
    var http = require('durandal/http'),
        app = require('durandal/app');
    
    return {
        displayName: 'Component A',
        activate: function () {
            
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        },
        viewModel: kendo.observable({
            firstName: "John",
            lastName: "Doe",
            genders: ["Male", "Female"],
            gender: "Male",
            agreed: false,
            confirmed: false,
            register: function (e) {
                e.preventDefault();

                this.set("confirmed", true);
            },
            startOver: function () {
                this.set("confirmed", false);
                this.set("agreed", false);
                this.set("gender", "Male");
                this.set("firstName", "John");
                this.set("lastName", "Doe");
            }
        })
            

    //viewAttached: function (newChild) {
    //    var viewModel = kendo.observable({
    //        firstName: "John",
    //        lastName: "Doe",
    //        genders: ["Male", "Female"],
    //        gender: "Male",
    //        agreed: false,
    //        confirmed: false,
    //        register: function (e) {
    //            e.preventDefault();

    //            this.set("confirmed", true);
    //        },
    //        startOver: function () {
    //            this.set("confirmed", false);
    //            this.set("agreed", false);
    //            this.set("gender", "Male");
    //            this.set("firstName", "John");
    //            this.set("lastName", "Doe");
    //        }
    //    });

    //    kendo.bind($("#kendo-bindable"), viewModel);
    //}
};
});