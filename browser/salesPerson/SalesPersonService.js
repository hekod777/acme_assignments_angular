console.log ('nwind is '+ nwindSalesApp);

nwindSalesApp.factory('SalesPersonFactory', function($http, $state, _){
	var SalesPersonFactory = {};
	var salesPeople = [];
	var assignment = [];

	SalesPersonFactory.getAllAssignments = function(){
		return $http.get('/api/salesPeople/assignment')
			.then(function(result){
				angular.copy(result.data, assignment);
				return assignment;
			})
	}


	SalesPersonFactory.fetchAll = function(){
		return $http.get('/api/salesPeople')
			.then(function(results){
				angular.copy(results.data, salesPeople);
				return salesPeople;
			})
	}

	SalesPersonFactory.submit = function(name){
		return $http.post('/api/salesPeople/', {theName: name})
			.then(function(result){
				salesPeople.push(result.data);
			})
	}

	SalesPersonFactory.delete = function(thePerson){
		return $http.delete('/api/salesPeople/'+thePerson.id)
			.then(function(){
				var idx = salesPeople.indexOf(thePerson);
				salesPeople.splice(idx,1);
			})
	}

	SalesPersonFactory.assign = function(salesperson, region){
		return $http.post('/api/salesPeople/' + salesperson.id + '/' + region.id)
			.then(function(result){
				assignment.push(result.data);
				return;
			})
	}

	SalesPersonFactory.unassign = function(salesperson, region){
		return $http.delete('/api/salesPeople/' + salesperson.id + '/' + region.id)
			.then(function(){
				var idx = assignment.findIndex(function(element){
					return element.salespersonId == salesperson.id && element.regionId == region.id;
				})
				assignment.splice(idx,1);
			})
	}

	SalesPersonFactory.assigned = function(salesperson, region){
		var link = assignment.filter(function(element){
			return element.salespersonId == salesperson.id && element.regionId == region.id;
		})
		linked = link.length == 0 ? false : true;
		//console.log ('linklength is ' + link.length);
		//console.log (linked);
		return linked;
	}

	return SalesPersonFactory;
})