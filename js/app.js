var app = angular.module('AppName', ['ui.router', 'Controllers']);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })

        .state('view1', {
            url: '/view1',
            templateUrl: 'views/view1.html',
            controller: 'ViewController'
        })
});