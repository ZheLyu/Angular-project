(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);;

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService','$scope'];
function ToBuyController(ShoppingListCheckOffService,$scope) {
  var showList = this;
   $scope.words1=""
    showList.items = ShoppingListCheckOffService.getItems();
      //console.log(showList.item);
    showList.removeItem = function (itemIndex) {
      //console.log(ShoppingListCheckOffService.isItemsEmpty());
      ShoppingListCheckOffService.removeItem(itemIndex);
      //ShoppingListCheckOffService.words=""
      if (ShoppingListCheckOffService.isItemsEmpty()==true){
        $scope.words1="Everything is bought!"
      }
    };

}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService,$scope) {

  var list2 = this;
  list2.items =ShoppingListCheckOffService.getBought();
  list2.words=function(){return ShoppingListCheckOffService.getWords()};

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookies", quantity: 10 },{ name: "apple", quantity: 3 },
  { name: "cola", quantity: 4 },{ name: "coffee", quantity: 15 },{ name: "banana", quantity: 13 }];
  var bought =[]
  var words="Nothing bought yet!"
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    bought.push(items[itemIdex])
    items.splice(itemIdex, 1);
    words=""
  };
  service.getWords = function () {
    return words;
  };
  service.getItems = function () {
    return items;
  };
  service.getBought = function () {
    return bought;
  };
  service.isItemsEmpty= function(){
    if(items.length==0){
      return true;
    }
    else{return false;}
  }
  
}

})();
