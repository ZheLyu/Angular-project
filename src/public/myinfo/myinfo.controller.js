(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', 'info'];
    function MyInfoController(MenuService, info) {
        var $ctrl = this;


        if (info) {
            $ctrl.saved =true;
            $ctrl.info = info;
            MenuService.getMenuItem(info.favorite)
                .then(function(response) {
                    $ctrl.menuItem = response;
                    $ctrl.saved = true;

                   // console.log($ctrl.menuItem)
                })
                .catch(function(response) {
                    $ctrl.saved = false;
                    //console.log(response);
                });
        }
    };

})();