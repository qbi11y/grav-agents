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

        .state('details', {
            url: '/details/:id',
            templateUrl: 'views/details.html',
            controller: 'DetailsController'
        })
});