nwindSalesApp.factory('RegionFactory', function($http, $state){
	var RegionFactory = {};
	var regions = [];

	RegionFactory.fetchAll = function(){
	return $http.get('/api/regions')
		.then(function(results){
			angular.copy(results.data, regions);
			return regions;
		})
	}

	RegionFactory.submit = function(zipcode){
		return $http.post('/api/regions/', {theZipcode: zipcode})
			.then(function(result){
				regions.push(result.data);
			})

	}

	RegionFactory.delete = function(theRegion){
		return $http.delete('/api/regions/'+theRegion.id)
			.then(function(){
				var idx = regions.indexOf(theRegion);
				regions.splice(idx,1);
			})
	}

	RegionFactory.double = function(zipcode){
		console.log (zipcode);
		var isUnique = regions.filter(function(region){
			return region.zipcode == zipcode;
		}).length == 0;
		console.log ('unique?'+isUnique);
		return isUnique;

	}

	return RegionFactory;
})
