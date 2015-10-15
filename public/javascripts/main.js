angular.module("translateApp", []),

angular.module("translateApp")
	.controller("translateController", ['$scope', '$http' , function($scope , $http){


	$scope.greeting = "Why won't this shit work?!?!?!?"

	$scope.trans = {
		word: '',
		language: '',
		translate: '',
	}

		$http.get('/translateform')
			.then(function(returnData){
				$scope.trans = returnData.data
			})



$scope.submit = function(){

        console.log('submit a translation')
        $http({
            method : 'POST',
            url    : '/translate',
            data   : $scope.trans
        }).then(function(returnData){
            console.log(returnData)
        }, function(error){
            console.log('error!', error)
        })
    }


	// $http.post('/translateform',
	// 	word     :$scope.word,
	// 	language :$scope.language,
	// 	translate:$scope.translate,
	// )

	// 	}.then(function(returnData){
	// 	console.log(returnData)
	// }), function(error){console.log(error)}	






	console.log('working')

}]);