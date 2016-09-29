nwindSalesApp.controller('RegionListCtrl', function($rootScope, $scope, $log, salespeople, regions, RegionFactory, SalesPersonFactory){
	
	$rootScope.salespeople = salespeople;

	$rootScope.regions = regions;

	$scope.submit = function(){
		var theZipcode = $scope.zipcode;
		$scope.zipcode = '';
		return RegionFactory.submit(theZipcode);
	}

	$scope.delete = function(region){
		return RegionFactory.delete(region);
	}

	$scope.double = function(){
		var isUnique = RegionFactory.double($scope.zipcode);
		return isUnique;
	}
})

