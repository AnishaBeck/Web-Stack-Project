var myapp = angular.module('PLAYERS', []);
/*Dependency Injection*/
myapp.controller('PLAYERcntrl', function($scope, $http) {
    $http.get('https://anishabeck.github.io/myjson.github.io/players.json')
        .success(function(response) {
            $scope.names = response.players;
            $scope.rowlimit = 10;
        });
});