(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/template/categoriescomponent.template.html',
            bindings: {
                items: '<'
            }
        });

})();