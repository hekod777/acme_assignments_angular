nwindSalesApp.directive('salespeopleSum', function(){
	return{
		scope: {
			theSalespeople: '='
		},
		templateUrl:'./salesPerson/salespeopleSum.html',
	}
})