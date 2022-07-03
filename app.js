document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

(function () {
'use strict'
angular.module('MFCalculator', [])	// body...
.controller('MFCalculatorController', function ($scope) {
	$scope.principal = undefined;
    $scope.rate = undefined;
    $scope.time = undefined;
    $scope.frequency = undefined;
    $scope.aoi = undefined;
    $scope.aoii = undefined;
    
    $scope.xxx = function myFunction() {
        $scope.y = document.getElementById("b1").value;
             if($scope.y == ""){ 
                     $scope.x = document.getElementById("b3").value;
                     if($scope.x == ""){                        
                        $scope.aoi = $scope.principal * (((1+((($scope.rate)/12)/100))**($scope.time*12)-1)/((($scope.rate)/12)/100)) * (1 + ((($scope.rate)/12)/100) )
                        $scope.aoii = $scope.aoi - ($scope.principal*(($scope.time)*12))
                        $scope.aoiii = $scope.principal * ($scope.time*12)
                     }
                     if($scope.x == "02"){
                         $scope.aoi = $scope.principal * (((1+((($scope.rate)/26)/100))**($scope.time*26)-1)/((($scope.rate)/26)/100)) * (1 + ((($scope.rate)/26)/100) )
                         $scope.aoii = $scope.aoi - ($scope.principal*(($scope.time)*26))
                         $scope.aoiii = $scope.principal * ($scope.time*26)
                     }
                     if($scope.x == "03"){
                         $scope.aoi = $scope.principal * (((1+((($scope.rate)/4)/100))**($scope.time*4)-1)/((($scope.rate)/4)/100)) * (1 + ((($scope.rate)/4)/100) )
                         $scope.aoii = $scope.aoi - ($scope.principal*(($scope.time)*4))
                         $scope.aoiii = $scope.principal * ($scope.time*4)
                     }                    
                }
            }    
    $scope.xx = function myFunction2() {
                     $scope.x = document.getElementById("b1").value;
                     if($scope.x == ""){                        
                        $scope.aoi =  $scope.principal * ((1 + (($scope.rate)/100))**($scope.time))
                        $scope.aoii = $scope.aoi - $scope.principal
                        $scope.aoiii = $scope.principal
                     }
             }
})
})();
