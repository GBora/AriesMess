console.log("base.js has been loaded1");

angular.module("myApp", ["firebase"])
    .factory("ChatService", ["$firebase",
        function($firebase) {
            var ref = new Firebase("https://popping-fire-9812.firebaseio.com/chat");
            return $firebase(ref);
        }
    ])
    .controller("myCtrl", ["$scope", "ChatService",
        function($scope, chatService) {
            console.log("ctrl has been instantiated");
            $scope.messages = chatService;

            $scope.login = function() {

                console.log("name " + $scope.userName + " " + "password " + $scope.userPass);
                $scope.user = {
                    "name": $scope.userName,
                    "pass": $scope.userPass
                };

                $scope.getMessages = function($http) {

                }

                $scope.send = function() {

                    var msg = {
                        "sender": $scope.userName,
                        "recipient": $scope.messRecipient,
                        "body": $scope.messBody
                    }

                    $scope.messages.$add(msg);

                }


            };
        }
    ]);