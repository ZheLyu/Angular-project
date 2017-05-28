(function() {
    'use strict';

    angular.module('data')
        .constant('ClientApi','https://davids-restaurant.herokuapp.com/')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http','ClientApi'];
    function MenuDataService($http,ClientApi) {
        var service = this;

        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: ClientApi+'categories.json'
            });
        }

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: ClientApi+'menu_items.json',
                params: {category: categoryShortName}
            });
        }
    }
})();