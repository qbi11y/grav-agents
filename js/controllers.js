var app = angular.module('Controllers', ['Data']);

app.controller('IndexController',['$scope', '$state', 'Data', function($scope, $state, Data) {
    Data.setData(Date());
    console.log('date', Data.getData());
    $scope.tableData = Data.getTable();
    $scope.showDetails = function(agent) {
    	Data.setAgentDetails(agent);
    	$state.go('details');
    }
}]);

app.controller('DetailsController', ['$scope', 'Data', function($scope, Data) {
    console.log('Details Controller Working');
    $scope.details = Data.getAgentDetails();
}])