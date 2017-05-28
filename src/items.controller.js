(function () {
    'use strict'
    angular.module('MenuApp')
        .controller('ItemsController',ItemsController);
    ItemsController.$inject=['items']

    function ItemsController(items) {
        var itCtrl=this
        itCtrl.items=items

    }

})();