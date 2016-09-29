nwindSalesApp.controller('RegionListCtrl', function($rootScope, $scope, $log, RegionFactory, SalesPersonFactory){
	
	RegionFactory.fetchAll()
		.then (function(results){
			console.log (results);
			//$scope.regions = results;
			$rootScope.regions = results;
		});

	SalesPersonFactory.fetchAll()
		.then (function(results){
			console.log (results);
			//$scope.salespeople = results;
			$rootScope.salespeople = results;
		});

	$scope.submit = function(){
		console.log($scope.zipcode);
		var theZipcode = $scope.zipcode;
		$scope.zipcode = '';
		console.log ($scope.newRegion.$invalid);
		return RegionFactory.submit(theZipcode);
	}

	$scope.delete = function(region){
		//console.log(salesperson);
		return RegionFactory.delete(region);
	}

	$scope.double = function(){
		var isUnique = RegionFactory.double($scope.zipcode);

		console.log('isU is ' + isUnique);
		return isUnique;
	}

})

nwindSalesApp.directive('regionSum', function(){
	return{
		scope: {
			theRegions: '='
		},
		templateUrl:'./region/regionSum.html',
	}
})