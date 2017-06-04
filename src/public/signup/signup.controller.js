(function () {
    'use strict'
    angular.module('public').controller('SignUpController',SignUpController)
    SignUpController.$inject=['MenuService','MyInfoService'];
    function SignUpController(MenuService,MyInfoService) {
        var $ctrl=this;
        $ctrl.info={};

        $ctrl.submit=function () {
            MenuService.getMenuItems($ctrl.info.favorite)
                .then(function (response) {
                    $ctrl.invalid=false;
                    $ctrl.submitted=true;
                    MyInfoService.setInfo($ctrl.info);
                })
                .catch(function () {
                    $ctrl.invalid=true
                });

        }

        $ctrl.valid=function () {
            MenuService.getMenuItem($ctrl.info.favorite)
                .then(function () {
                    $ctrl.invalid=false;

                })
                .catch(function () {
                    $ctrl.invalid=true


                })

        }



    }

})()/**
 * Created by dell on 2017/6/3.
 */
