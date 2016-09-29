nwindSalesApp.controller('SalesPersonListCtrl', function($rootScope, $scope, $log, SalesPersonFactory, RegionFactory){
	
	SalesPersonFactory.fetchAll()
		.then (function(results){
			$rootScope.salespeople = results;
		});

	RegionFactory.fetchAll()
		.then (function(results){
			$rootScope.regions = results;
		});

	SalesPersonFactory.getAllAssignments()
	 	.then(function(results){
	 		console.log(results);
	 	})

	$scope.submit = function(){
		console.log($scope.name);
		var theName = $scope.name;
		$scope.name = '';
		console.log ($scope.newSalesperson.$invalid);
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
		//console.log ('the result is ' + SalesPersonFactory.assigned(salesperson, region))
		return SalesPersonFactory.assigned(salesperson, region);
	}

	$scope.delete = function(salesperson){
		return SalesPersonFactory.delete(salesperson);
	}

	//console.log('relationship is ' + SalesPersonFactory.relationship);

})

nwindSalesApp.directive('salespeopleSum', function(){
	return{
		scope: {
			theSalespeople: '='
		},
		templateUrl:'./salesPerson/salespeopleSum.html',
		//controller:'SalesPersonListCtrl',
	}
})