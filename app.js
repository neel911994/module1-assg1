(function(){
  'use strict'
  angular.module('lunchCheckApp',[])
  .controller('lunchCheckController',lunchCheckController);

  lunchCheckController.$inject=['$scope'];

  function lunchCheckController($scope){
    $scope.list = "";
    $scope.message = "";
    $scope.checkLunch =function(){
      var words = $scope.list.split(",");
      console.log(words);

      if(words.length<4){
        $scope.message= "Enjoy!!!";
      
        document.getElementById("in").style.borderColor = "green";
      }
      else{
        $scope.message= "Too Much!!!";
          document.getElementById("in").style.borderColor = "green";
      }
      if(words[0] == ""){
        $scope.message = "Please enter data first";
          document.getElementById("in").style.borderColor = "red";
      }
    }
  }
})();
