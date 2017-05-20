(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service(' MenuSearchService',  MenuSearchService)
        .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);


    NarrowItDownController.$inject = [' MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchItem=""
        menu.foundItem=""
        menu.search=function () {
            menu.nothing=""
            if(menu.searchItem){
                var pro=MenuSearchService.getMenuItems(menu.searchItem.toLowerCase())
                pro.then(function (foundItem) {
                    if(foundItem==0) {
                        menu.nothing = "Nothing Found"
                    }
                    menu.foundItem=foundItem
                })
            } else{
                menu.nothing="Nothing Found"
                menu.foundItem=""
            }
        };
        menu.removeItem=function (itemIndex) {
            menu.foundItem.splice(itemIndex, 1)
        }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function  MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMenuItems = function (searchItem) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });
            return response.then(function (res) {
                var menuRes=res.data;
                var foundItem=[];
                menuRes.menu_items.forEach(function (item) {
                    if(item.description.indexOf(searchItem)!=-1){
                        foundItem.push({
                            name: item.name,
                            short_name: item.short_name,
                            desciption:item.description
                        })
                    }
                })
                return foundItem

            })
        };

    }
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                badRemove: '=',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }
    function FoundItemsDirectiveController() {
        var menu = this;
    }



})();
/**
 * Created by dell on 2017/5/19.
 */
