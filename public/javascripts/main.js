angular.module("translateApp", []),

angular.module("translateApp")
	.controller("translateController", ['$scope', '$http' , function($scope , $http){


	$scope.greeting = "Start Translating"

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
            console.log('returnData',returnData)
            $scope.data = returnData.data
            if (!$scope.data.translatedText){

            	alert('No translation found')
            	console.log('Error translated')
            }

        }, function(error){
        	// $scope.data.error = true
        	// $scope.data = returnData.data;
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

angular.module("translateApp")
	.controller("quizController", ['$scope', '$http' , function($scope , $http){

		$scope.greeting = 'Translate Quiz'


		// var transList = [{
		// 	'hello'
		// },

		// {
		// 	'goodbye'
		// },
		// {

		// 	''
		// },
		// ]



	}]);








