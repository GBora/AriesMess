console.log("base.js has been loaded1");

angular.module("myApp", [])

.controller("myCtrl", function($scope) {
    console.log("ctrl has been instantiated");
    $scope.msg = "hello";

    $scope.login = function() {

        console.log("name " + $scope.userName + " " + "password " + $scope.userPass);
        $scope.user = {
            "name": $scope.userName,
            "pass": $scope.userPass
        };

    };
});