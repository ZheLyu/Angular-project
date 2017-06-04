(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/template/itemscomponent.template.html',
            bindings: {
                items: '<'
            }
        });

})();
