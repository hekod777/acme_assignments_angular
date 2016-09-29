var nwindSalesApp = angular.module('nwindSalesApp',['ui.router']);

nwindSalesApp
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl:'/home.html',
			})
			.state('salesPeople',{
				url:'/salesPeople',
				templateUrl:'/salesPerson/salesPeople.html',
				controller:'SalesPersonListCtrl',
				resolve:{
					salespeople: function(SalesPersonFactory){
						return SalesPersonFactory.fetchAll();
					},
					regions: function(RegionFactory){
						return RegionFactory.fetchAll();
					}
				}
			})
			.state('regions',{
				url:'/regions',
				templateUrl:'/region/regions.html',
				controller:'RegionListCtrl',
				resolve:{
					salespeople: function(SalesPersonFactory){
						return SalesPersonFactory.fetchAll();
					},
					regions: function(RegionFactory){
						return RegionFactory.fetchAll();
					}
				}
			})

		$urlRouterProvider.otherwise('/');

	})
	.constant('_',window._)
	.run(function($rootScope){
		$rootScope._ = window._;
	});
