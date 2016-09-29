nwindSalesApp.directive('regionSum', function(){
	return{
		scope: {
			theRegions: '='
		},
		templateUrl:'./region/regionSum.html',
		//template: 'aaa'
	}
})