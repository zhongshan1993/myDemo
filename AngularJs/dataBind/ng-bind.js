var myModule = angular.module("HelloAngular", []);

// HelloAngular控制器与$scope的依赖注入
myModule.controller("ngController",['$scope',
	function HelloAngular($scope) {
		$scope.greeting = {
			text: 'Hello'
		};
	}
])