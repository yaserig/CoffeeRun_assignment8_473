(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {

        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        isDecaf: function(coffee, strength) {
            return !(strength > 20 && /.?decaf.?/.test(coffee));
        }


    };

    App.Validation = Validation;
    window.App = App;
})(window);
