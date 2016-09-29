nwindSalesApp.controller('SalesPersonListCtrl', function($rootScope, $scope, $log, regions, salespeople, SalesPersonFactory, RegionFactory){
	
	// SalesPersonFactory.fetchAll()
	// 	.then (function(results){
	// 		$rootScope.salespeople = results;
	// 	});

	// RegionFactory.fetchAll()
	// 	.then (function(results){
	// 		$rootScope.regions = results;
	// 	});

	$rootScope.salespeople = salespeople;

	$rootScope.regions = regions;

	SalesPersonFactory.getAllAssignments()
	 	.then(function(results){
	 		console.log(results);
	 	})

	$scope.submit = function(){
		var theName = $scope.name;
		$scope.name = '';
		return SalesPersonFactory.submit(theName);
	}

	$scope.assign = function(salesperson, region){
		if ($scope.assigned(salesperson,region)){
			SalesPersonFactory.unassign(salesperson,region);
		}
		else {
			SalesPersonFactory.assign(salesperson, region);
		}
		return;
	}

	$scope.assigned = function(salesperson, region){
		return SalesPersonFactory.assigned(salesperson, region);
	}

	$scope.delete = function(salesperson){
		return SalesPersonFactory.delete(salesperson);
	}

})