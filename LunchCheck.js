(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.sentence = "list comma separated ";

  $scope.reWords = function () {
    var rewords = calculateWords($scope.sentence);
    $scope.words = rewords;
  };

  function calculateWords(string) {
    if(string==""){
       return "Please enter data first"
     }
    var words=string.split(',')
    if(words.length<=3){
      return "Enjoy!"
    }
    else {
      return "Too Much!"
    }



  }

});


})();
