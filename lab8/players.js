var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/playerdata', {
        templateUrl: 'data.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = ' TWOTWOFOUR helps in organising schedule for training and competition.Its easy use its nice its beautiful its awesome super 100 days';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://anishabeck.github.io/myjson.github.io/players.json')
        .success(function(response) {
            $scope.names = response.players;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://anishabeck.github.io/myjson.github.io/players.json')
        .success(function(response) {
            $scope.names = response.players;
            $scope.rowlimit = 10;
        });
});