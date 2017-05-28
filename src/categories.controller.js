(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

// 'item' is injected through state's resolve
    CategoriesController.$inject = ['categories']
    function CategoriesController(categories) {
        var caCtrl = this;
        caCtrl.categories = categories;
    }

})();