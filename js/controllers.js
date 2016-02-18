var app = angular.module('Controllers', ['Data']);

app.controller('IndexController',['$scope', '$state', 'Data', function($scope, $state, Data) {
    $scope.currentStep = 1;
    $scope.loadingData = true;
    Data.setData(Date());
    console.log('date', Data.getData());
    $scope.tableData = Data.getTable();

    function loadData() {
    	setTimeout(function() {
    		$scope.$apply(function() {
    			$scope.loadingData = false;
    		})
    	},4000)
    }
    $scope.showDetails = function(agent) {
    	Data.setAgentDetails(agent);
    	$state.go('details');
    }

    $scope.updateWizard = function(step) {
    	console.log(step);
    	switch (step) {
    		case 'next':
    			$scope.currentStep++;
    			if ($scope.currentStep == 3) {
    				loadData();
    			}
    			break;

			case 'back':
				$scope.currentStep--;
				$scope.loadingData = true;
				break

    	}
    }
}]);

app.controller('DetailsController', ['$scope', 'Data', function($scope, Data) {
    console.log('Details Controller Working');
    $scope.details = Data.getAgentDetails();
}])